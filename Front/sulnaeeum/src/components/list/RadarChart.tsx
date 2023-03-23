import { DrinkDetailType, DrinkTasteType } from '@/types/DataTypes';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default function DrinkChart(props: {drink: DrinkTasteType}) {
    const {drink} = props
    const data = [
      { subject: '청량감', value: drink.tasteRefresh },
      { subject: '신맛', value: drink.tasteSour },
      { subject: '바디맛', value: drink.tasteBody },
      { subject: '향', value: drink.tasteFlavor },
      { subject: '목넘김', value: drink.tasteThroat },
      { subject: '단맛', value: drink.tasteSweet },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar style={{border: '2px'}} name="Mike" dataKey="A" stroke="#d3d3d3" fill="#d3d3d3" fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    );
}