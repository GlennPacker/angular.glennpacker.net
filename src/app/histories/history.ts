export interface History {
    year: string;
    title: string;
    details: Details;
}

export interface Details {
    summary?: (string | null)[] | null;
    title: string;
    listItems?: (ListItemsEntity)[] | null;
}

export interface ListItemsEntity {
    id: number;
    text: string;
    link?: string | null;
}
