import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { SKILLS_DATA } from '../constants';

const SkillRadar: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_DATA}>
        <PolarGrid stroke="#334155" strokeOpacity={0.5} />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
        <Radar
          name="Skills"
          dataKey="A"
          stroke="#00A9FF"
          strokeWidth={2.5}
          fill="#00A9FF"
          fillOpacity={0.25}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillRadar;
