import Realm from 'realm';

import { FAVORITE_LIST_SCHEMA, FavoriteListSchema } from './Schema';

let databaseFavoriteOption = {
    path: 'FavoriteListApp.realm',
    schema: [FavoriteListSchema],
};

export const insertNewPFavoriteList = (newFavoriteList) =>
    new Promise((resolve, reject) => {
        Realm.open(databaseFavoriteOption)
            .then((realm) => {
                realm.write(() => {
                    realm.create(FAVORITE_LIST_SCHEMA, newFavoriteList);
                    resolve(newFavoriteList);
                });
            })
            .catch((err) => reject(err));
    });

export const queryAllFavoriteList = () =>
    new Promise((resolve, reject) => {
        Realm.open(databaseFavoriteOption)
            .then((realm) => {
                let allFavoriteList = realm.objects(FAVORITE_LIST_SCHEMA);
                resolve(allFavoriteList);
            })
            .catch((err) => reject(err));
    });
