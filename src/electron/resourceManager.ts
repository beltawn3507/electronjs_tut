import osUtils, { freemem } from 'os-utils'
import fs from 'fs'

const POLLING_INTERVAL=500;//500 ms

export function pollResources(){
    setInterval(async()=>{
        const cpuUsage=await getCpuUsage();
        const ramUsage= getramUsage();
        const storageData=getStorageData();
        console.log(cpuUsage," ",ramUsage,storageData.usage);
    },POLLING_INTERVAL);
}

function getCpuUsage(){
    return new Promise((resolve)=>{
        osUtils.cpuUsage(resolve);
    });
}

function getramUsage(){
    return 1-osUtils.freememPercentage();
}

function getStorageData(){
    const stats=fs.statfsSync(process.platform === 'win32'?"C://":"/");
    const  total=stats.bsize * stats.blocks;
    const free=stats.bsize*stats.bfree;
    return {
        total:Math.floor(total/1_000_000_000),
        usage:1-(free/total)
    };
}

