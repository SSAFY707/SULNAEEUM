import { DrinkDetailType, DrinkTasteType } from '@/types/DataTypes';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default function f(props: {drink: DrinkTasteType}) {
    const {drink} = props
    const data = [
      { subject: '청량함', value: (drink.tasteRefresh + 1) * 4 },
      { subject: '신맛', value: (drink.tasteSour + 1) * 4 },
      { subject: '향', value: (drink.tasteFlavor + 1) * 4 },
      { subject: '바디감', value: (drink.tasteBody + 1) * 4 },
      { subject: '목넘김', value: (drink.tasteThroat + 1) * 4 },
      { subject: '단맛', value: (drink.tasteSweet + 1) * 4 },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" className={''}/>
          <Radar style={{border: '2px'}} name="Mike" dataKey="value" stroke="#214262" fill="#214262" fillOpacity={0.3} />
        </RadarChart>
      </ResponsiveContainer>
    );
}