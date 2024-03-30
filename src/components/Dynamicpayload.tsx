type ComparisonOperator = '=' | '<' | '>' | '<=' | '>=' | 'in' | 'contains';

interface Filter {
  field: string;
  value: any;
  datatype: string; 
}

function generateFilterPayload(filters: Filter[]): any {
  const payload: any = {};

  filters.forEach(filter => {
    const { field, value, datatype } = filter;

    if (payload[field] === undefined) {
      payload[field] = {};
    }

    if (datatype === 'number') {
      let operator: ComparisonOperator;
      let numericValue = value;
      if (typeof value === 'string') {
        operator = value.match(/(>=|<=|>|<|=)/)?.[0] as ComparisonOperator;
        numericValue = Number(value.replace(/(>=|<=|>|<|=)/, ''));
      } else {
        operator = '=';
      }
      payload[field][operator] = numericValue;
    } else if (datatype === 'string') {
      if (typeof value === 'string') {
        if (value.includes(',')) {
          payload[field]['in'] = value.split(',');
        } else if (value.includes('&')) {
          payload[field]['contains'] = value.split('&');
        } else {
          payload[field]['contains'] = value;
        }
      }
    }
  });

  return payload;
}

// Example usage:
const filters: Filter[] = [
  { field: 'age', value: '>=30', datatype: 'number' },
  { field: 'name', value: 'John&Doe', datatype: 'string' },
  { field: 'city', value: 'New York,Los Angeles', datatype: 'string' }
];

const payload = generateFilterPayload(filters);
console.log(payload);
