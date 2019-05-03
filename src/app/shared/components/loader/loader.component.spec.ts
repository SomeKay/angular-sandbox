import { Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY, Subject } from 'rxjs';
import { SharedStateService } from 'src/app/shared/state/services/shared-state.service';
import { MockSharedStateService } from 'src/app/shared/state/services/shared-state.service.mock';
import { LoaderComponent } from './loader.component';

describe('shared.LoaderComponent', () => {
    let testee: LoaderComponent;
    let fixture: ComponentFixture<LoaderComponent>;
    let fixtureInjector: Injector;
    let sharedStateServiceMock: SharedStateService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [LoaderComponent],
            providers: [
                {
                    provide: SharedStateService,
                    useClass: MockSharedStateService
                }
            ]
        });

        fixture = TestBed.createComponent(LoaderComponent);
        testee = fixture.componentInstance;
        fixtureInjector = fixture.debugElement.injector;
        sharedStateServiceMock = fixtureInjector.get<SharedStateService>(
            SharedStateService
        );
    });

    describe('on component init', () => {
        beforeEach(() => {
            sharedStateServiceMock.getLayoutState = () => EMPTY;
        });

        it('should have a working snapshot', () => {
            testee.loading = 2;
            fixture.detectChanges();
            expect(fixture).toMatchSnapshot();
        });

        it('should subscribe to pokemon list data changes', done => {
            const subject = new Subject<any>();
            sharedStateServiceMock.getLayoutState = () => subject;
            testee.ngOnInit();

            expect(testee.loading).toBeUndefined();
            sharedStateServiceMock.getLayoutState().subscribe(() => {
                expect(testee.loading).toEqual(2);
                done();
            });

            subject.next({
                loading: 2
            });
        });
    });

    it('should perform on destroy actions', () => {
        testee.subscriptions.unsubscribe = jest.fn();
        testee.ngOnDestroy();

        expect(testee.subscriptions.unsubscribe).toHaveBeenCalled();
    });
});
