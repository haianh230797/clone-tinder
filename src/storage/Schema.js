export const FAVORITE_LIST_SCHEMA = 'FavoriteList';

export const FavoriteListSchema = {
    name: FAVORITE_LIST_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        firstName: 'string',
        lastName: 'string',
        location: 'string',
        dob: 'string',
        phone: 'string',
        picture: 'string',
    },
};
