import { Id, TransactionType, WithId } from './shared';

export interface CategoryDto extends WithId {
    name: string;
    level: number;
    index: number;
    type: TransactionType;
    imageId: Id;
    userId: Id;
    parentId?: Id;
}

export interface CategoryRequestDto extends Omit<CategoryDto, 'id' | 'userId' | 'level'> {}

export interface CategoryImageDto extends WithId {
    name?: string;
    code: string;
    image: File;
}

export interface CategoryImageRequestDto extends Pick<CategoryImageDto, 'name' | 'image'> {}
