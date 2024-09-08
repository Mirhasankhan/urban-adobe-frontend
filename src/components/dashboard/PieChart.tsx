// src/components/PieChart.tsx
import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { JWTDecode } from "@/utils/jwtDecode";
import { useListingsQuery } from "@/redux/features/listing/listing.api";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const user = JWTDecode();
  const email = user?.email;
  const { data: listings } = useListingsQuery(email);

  const chartRef = useRef<ChartJS<"pie", number[], string> | null>(null);

  const shop = listings?.filter(
    (listing: { type: string }) => listing.type == "shop"
  );
  const bachelor = listings?.filter(
    (listing: { type: string }) => listing.type == "bachelor"
  );
  const family = listings?.filter(
    (listing: { type: string }) => listing.type == "family"
  );
  const office = listings?.filter(
    (listing: { type: string }) => listing.type == "office"
  );

  const data: ChartData<"pie", number[], string> = {
    labels: ["Family", "Bachelor", "Shop", "Office"],
    datasets: [
      {
        data: [family?.length, bachelor?.length, shop?.length, office?.length],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  useEffect(() => {
    const currentChart = chartRef.current;

    return () => {
      if (currentChart) {
        currentChart.destroy();
      }
    };
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 mt-24">
        Property List With Category
      </h2>
      <Pie data={data} ref={chartRef} />
    </div>
  );
};

export default PieChart;
