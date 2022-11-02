import React , {useState, useEffect} from 'react';

export default function CountdownTimer(props){
    const today = new Date();
    const tomorrow = new Date();
    const canMine = new Date(props);

    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const remaining = Date.parse(canMine) - Date.parse(today);

    const seconds = Math.floor( (remaining/1000) % 60);
    const minutes = Math.floor( (remaining/1000/60) % 60);
    const hours = Math.floor( (remaining / (1000 * 60 * 60)) % 24);


    console.log(today);
    console.log(tomorrow)
    console.log(tomorrow.toUTCString())
    console.log(tomorrow.getDate());
    console.log(remaining)
    console.log(canMine.getDate());
    console.log(canMine)
    //console.log(nextMine)
    console.log(hours)
    if(tomorrow > canMine){
        console.log('working')
    }

    return {
        seconds, minutes, hours, remaining
    }
}
/*
mongosh "mongodb://cluster-eternal-shard-00-00.x09h7.mongodb.net:27017,cluster-eternal-shard-00-01.x09h7.mongodb.net:27017,cluster-eternal-shard-00-02.x09h7.mongodb.net:27017/Eternal-DB?replicaSet=atlas-mj69h9-shard-0" --ssl --authenticationDatabase admin --username mongosh --password Mongosh


*/