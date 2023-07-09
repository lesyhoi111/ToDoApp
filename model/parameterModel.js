import Realm from 'realm';
import React, { useState, useEffect } from 'react';


const Parameter = () => {
  const [realm, setRealm] = useState(null);
  const [listParameter, setListParameter] = useState([]);
  
  useEffect(() => {
    Realm.open({
      schema: [
        { name: 'Parameter',
          properties: {
            init_time: 'int',
            break_time: 'int',
            long_break_after: 'int',
            long_break_time: 'int',
          },
        }
      ],
    }).then(realm => {
        setRealm(realm);
        setListParameter(realm.objects('Parameter'));
        addParameter(10,10,10,10)
    });
  }, []);

  const getList = () => {
    Realm.open({
        schema: [
            { name: 'Parameter',
              properties: {
                init_time: 'int',
                break_time: 'int',
                long_break_after: 'int',
                long_break_time: 'int',
              },
            }
          ],
        }).then(realm => {
            setListParameter(realm.objects('Parameter'));
    });
  };

  const addParameter = (init_time,break_time,long_break_after,long_break_time) => {
    if (!realm) {
      return;
    }
    let newProject = null;
    realm.write(() => {
        newProject=realm.create('Parameter', { 
            init_time: init_time,
            break_time: break_time,
            long_break_after: long_break_after,
            long_break_time: long_break_time,
       });
      setListParameter(realm.objects('Parameter'));
    });
    return newProject;
  };

  const updateParameter = (init_time,break_time,long_break_after,long_break_time) => {
    realm.write(() => {
            realm.objects('Parameter')[0].init_time= init_time,
            realm.objects('Parameter')[0].break_time= break_time,
            realm.objects('Parameter')[0].long_break_after= long_break_after,
            realm.objects('Parameter')[0].long_break_time= long_break_time,
        setListParameter(realm.objects('Parameter'));
    });
  };


  return {
    listParameter,
    getList,
    addParameter,
    updateParameter,
  };
};

export default Parameter;