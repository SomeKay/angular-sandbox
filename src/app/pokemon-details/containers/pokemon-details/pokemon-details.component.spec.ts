import { Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject } from 'rxjs';
import { SharedStateService } from 'src/app/shared/state/services/shared-state.service';
import { MockSharedStateService } from 'src/app/shared/state/services/shared-state.service.mock';
import { pokemonDetailsDataMock } from '../../models/pokemon-details-data.mock';
import { PokemonDetailsStateService } from '../../state/services/pokemon-details-state.service';
import { MockPokemonDetailsStateService } from '../../state/services/pokemon-details-state.service.mock';
import { PokemonDetailsComponent } from './pokemon-details.component';

describe('pokemonDetails.PokemonDetailsComponent', () => {
    let testee: PokemonDetailsComponent;
    let fixture: ComponentFixture<PokemonDetailsComponent>;
    let fixtureInjector: Injector;
    let pokemonDetailsStateServiceMock: PokemonDetailsStateService;
    let sharedStateServiceMock: SharedStateService;
    let routeMock: ActivatedRoute;
    const nameMock = 'pokemonFoo';

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [PokemonDetailsComponent],
            providers: [
                {
                    provide: PokemonDetailsStateService,
                    useClass: MockPokemonDetailsStateService
                },
                {
                    provide: SharedStateService,
                    useClass: MockSharedStateService
                },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: of({ id: 'foo' }),
                        paramMap: of({
                            get: jest.fn().mockReturnValue(nameMock)
                        })
                    }
                }
            ],
            imports: [RouterTestingModule]
        });

        fixture = TestBed.createComponent(PokemonDetailsComponent);
        testee = fixture.componentInstance;
        fixtureInjector = fixture.debugElement.injector;
        pokemonDetailsStateServiceMock = fixtureInjector.get<
            PokemonDetailsStateService
        >(PokemonDetailsStateService);
        sharedStateServiceMock = fixtureInjector.get<SharedStateService>(
            SharedStateService
        );
        routeMock = fixtureInjector.get<ActivatedRoute>(ActivatedRoute);
    });

    describe('on component init', () => {
        beforeEach(() => {
            pokemonDetailsStateServiceMock.getDataState = jest.fn(() => of());
        });

        it('should have a working snapshot', () => {
            pokemonDetailsStateServiceMock.getDataState = jest.fn(() =>
                of(pokemonDetailsDataMock)
            );
            testee.ngOnInit();
            fixture.detectChanges();

            expect(fixture).toMatchSnapshot();
        });

        it('should subscribe to pokemon details data changes', done => {
            const subject = new Subject<any>();
            pokemonDetailsStateServiceMock.getDataState = () => subject;
            testee.ngOnInit();

            pokemonDetailsStateServiceMock.getDataState().subscribe(() => {
                expect(testee.pokemon).toEqual(pokemonDetailsDataMock.pokemon);
                done();
            });

            subject.next(pokemonDetailsDataMock);
        });

        it('should handle route subscriptions', () => {
            testee.fetchPokemonDetails = jest.fn();
            testee.ngOnInit();

            expect(testee.name).toBe(nameMock);
            expect(testee.fetchPokemonDetails).toHaveBeenCalledTimes(1);
            expect(sharedStateServiceMock.addLoading).toHaveBeenCalledTimes(1);
        });
    });

    it('should enable pokemon details fetching', () => {
        testee.name = nameMock;
        testee.fetchPokemonDetails();

        expect(
            pokemonDetailsStateServiceMock.fetchPokemonDetails
        ).toHaveBeenCalledWith(nameMock);
        expect(
            pokemonDetailsStateServiceMock.fetchPokemonDetails
        ).toHaveBeenCalledTimes(1);
    });

    it('should perform on destroy actions', () => {
        testee.subscriptions.unsubscribe = jest.fn();
        testee.ngOnDestroy();

        expect(testee.subscriptions.unsubscribe).toHaveBeenCalled();
    });
});
