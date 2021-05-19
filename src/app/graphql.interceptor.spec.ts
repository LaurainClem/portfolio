import { TestBed } from '@angular/core/testing';

import { GraphqlInterceptor } from './graphql.interceptor';

describe('GraphqlInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GraphqlInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GraphqlInterceptor = TestBed.inject(GraphqlInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
