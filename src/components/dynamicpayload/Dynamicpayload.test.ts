import { generateFilterPayload, Filter } from './Dynamicpayload';

describe('generateFilterPayload', () => {
  it('generates the correct payload for number datatype', () => {
    const filters: Filter[] = [
      { field: 'age', value: '>=30', datatype: 'number' },
    ];
    const payload = generateFilterPayload(filters);
    expect(payload).toEqual({ age: { '>=': 30 } });
  });

  it('generates the correct payload for string datatype with "&" separator', () => {
    const filters: Filter[] = [
      { field: 'name', value: 'John&Doe', datatype: 'string' },
    ];
    const payload = generateFilterPayload(filters);
    expect(payload).toEqual({ name: { contains: ['John', 'Doe'] } });
  });

  it('generates the correct payload for string datatype with "," separator', () => {
    const filters: Filter[] = [
      { field: 'city', value: 'New York,Los Angeles', datatype: 'string' },
    ];
    const payload = generateFilterPayload(filters);
    expect(payload).toEqual({ city: { in: ['New York', 'Los Angeles'] } });
  });

  it('generates an empty payload when no filters are provided', () => {
    const filters: Filter[] = [];
    const payload = generateFilterPayload(filters);
    expect(payload).toEqual({});
  });

  
