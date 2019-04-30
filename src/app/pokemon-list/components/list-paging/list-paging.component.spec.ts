import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPagingComponent } from './list-paging.component';

describe('pokemonList.ListPagingComponent', () => {
    let testee: ListPagingComponent;
    let fixture: ComponentFixture<ListPagingComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [ListPagingComponent]
        });

        fixture = TestBed.createComponent(ListPagingComponent);
        testee = fixture.componentInstance;
    });

    it('should have a snapshot', () => {
        testee.nextUrl = 'foo';
        testee.previousUrl = 'bar';

        expect(fixture).toMatchSnapshot();
    });

    it('should emit paging clicks', () => {
        testee.paging.emit = jest.fn();
        testee.pagingClicked('foo');

        expect(testee.paging.emit).toHaveBeenCalledWith('foo');
    });
});
