export interface BuurtCode {
  id: string;
  gemeentecode: number;
  description: string;
}

export const Buurtcodes: BuurtCode[] = [
  { id: '101', gemeentecode: 1234, description: 'buurt 1' },
  { id: '102', gemeentecode: 1234, description: 'buurt 2' },
  { id: '103', gemeentecode: 1234, description: 'buurt 3' },
  { id: '104', gemeentecode: 1234, description: 'buurt 4' },
  { id: '105', gemeentecode: 1234, description: 'buurt 5' },
  { id: '201', gemeentecode: 123, description: 'buurt 1a' },
  { id: '202', gemeentecode: 123, description: 'buurt 2a' },
  { id: '203', gemeentecode: 123, description: 'buurt 3a' },
  { id: '204', gemeentecode: 123, description: 'buurt 4a' },
  { id: '205', gemeentecode: 123, description: 'buurt 5a' }
];
