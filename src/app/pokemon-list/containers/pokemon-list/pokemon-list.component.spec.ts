import { Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of as observableOf, Subject } from 'rxjs';
import { SharedStateService } from 'src/app/shared/state/services/shared-state.service';
import { SharedStateServiceMock } from 'src/app/shared/state/services/shared-state.service.mock';
import { ListPagingComponentMock } from '../../components/list-paging/list-paging.component.mock';
import { pokemonListDataMock } from '../../models/pokemon-list-data.mock';
import { PokemonListStateService } from '../../state/services/pokemon-list-state.service';
import { PokemonListStateServiceMock } from '../../state/services/pokemon-list-state.service.mock';
import { PokemonListComponent } from './pokemon-list.component';

describe('pokemonList.PokemonListComponent', () => {
    let testee: PokemonListComponent;
    let fixture: ComponentFixture<PokemonListComponent>;
    let fixtureInjector: Injector;
    let pokemonListStateServiceMock: PokemonListStateService;
    let sharedStateServiceMock: SharedStateService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [PokemonListComponent, ListPagingComponentMock],
            providers: [
                {
                    provide: PokemonListStateService,
                    useClass: PokemonListStateServiceMock
                },
                {
                    provide: SharedStateService,
                    useClass: SharedStateServiceMock
                }
            ],
            imports: [RouterTestingModule]
        });

        fixture = TestBed.createComponent(PokemonListComponent);
        testee = fixture.componentInstance;
        fixtureInjector = fixture.debugElement.injector;
        pokemonListStateServiceMock = fixtureInjector.get<
            PokemonListStateService
        >(PokemonListStateService);
        sharedStateServiceMock = fixtureInjector.get<SharedStateService>(
            SharedStateService
        );
    });

    describe('on component init', () => {
        beforeEach(() => {
            testee.fetchPokemonList = jest.fn();
            pokemonListStateServiceMock.getDataState = jest.fn(() =>
                observableOf()
            );
        });

        it('should trigger pokemon list fetching', () => {
            testee.ngOnInit();

            expect(testee.fetchPokemonList).toHaveBeenCalled();
        });

        it('should increase the loading counter', () => {
            testee.ngOnInit();

            expect(sharedStateServiceMock.addLoading).toHaveBeenCalledTimes(1);
        });

        it('should subscribe to pokemon list data changes', done => {
            const subject = new Subject<any>();
            pokemonListStateServiceMock.getDataState = () => subject;
            testee.ngOnInit();

            pokemonListStateServiceMock.getDataState().subscribe(() => {
                expect(testee.pokemonList).toEqual(
                    pokemonListDataMock.pokemonList
                );
                expect(testee.previousUrl).toEqual(
                    pokemonListDataMock.previousUrl
                );
                expect(testee.nextUrl).toEqual(pokemonListDataMock.nextUrl);
                done();
            });

            subject.next(pokemonListDataMock);
        });
    });

    it('should enable pokemon list fetching', () => {
        testee.fetchPokemonList();
        expect(pokemonListStateServiceMock.fetchPokemonList).toHaveBeenCalled();
    });

    it('should enable pokemon list fetching with URL', () => {
        testee.fetchPokemonList('foo');
        expect(
            pokemonListStateServiceMock.fetchPokemonList
        ).toHaveBeenCalledWith('foo');
    });

    it('should perform on destroy actions', () => {
        testee.subscriptions.unsubscribe = jest.fn();
        testee.ngOnDestroy();

        expect(testee.subscriptions.unsubscribe).toHaveBeenCalled();
    });
});
