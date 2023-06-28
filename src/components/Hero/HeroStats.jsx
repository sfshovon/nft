import { HeroStatsData } from "@/utils/HeroData";

const HeroStats = () => {
  return (
    <div className="mt-4 flex gap-8 bg-transparent">
      {
        HeroStatsData.map((data, index) => (
          <div key={index}>
            <div className="stat-value">{data?.value}</div>
            <div className="stat-desc">{data?.description}</div>
          </div>
        ))
      }
    </div>
  );
};

export default HeroStats;