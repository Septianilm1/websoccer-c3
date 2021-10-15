import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
    {id:1,playingDate:new Date(2021,08,10),HomeTeam: 'Persija',
    AwayTeam: 'Bali United',HomeScore:3,AwayScore:2,RefName:'Joko',
    notes:'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,08,11),HomeTeam: 'Evos',
    AwayTeam: 'Persipon',HomeScore:6,AwayScore:0,RefName:'Andre',
    notes:'Pertandingan Selesai'},
    {id:3,playingDate:new Date(2021,08,13),HomeTeam: 'OG',
    AwayTeam: 'Alliance',HomeScore:2,AwayScore:0,RefName:'Jesse Vainikka',
    notes:'Pertandingan Selesai'},
    {id:4,playingDate:new Date(2021,08,16),HomeTeam: 'Persip solo',
    AwayTeam: 'Persija',HomeScore:2,AwayScore:0,RefName:'Sule',
    notes:'Pertandingan Selesai'},
]
export const TEAM:Team [] = [
    {id:1,name:'evos',type:'over 30'},
    {id:2,name:'OG',type:'over 30'},
    {id:3,name:'Persija',type:'over 30'},
    {id:4,name:'RRQ',type:'over 30'}
]