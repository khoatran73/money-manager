import { Id, TransactionType } from './shared';

export interface CategoryRequestDto  {
    name: string;
    iconStr: string;
    color: string;
    backgroundColor: string;
    level: number;
    index: number;
    type: TransactionType;
    parentId?: Id;
}
