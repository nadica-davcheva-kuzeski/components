import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import BarChart from "../components/BarChart";
import StackedBarChart from '../components/StackedBarChart';
import HeadingText from '../components/HeadingText';
import HealthcareAffordabilityIndexChart from '../components/HealthcareAffordabilityIndexChart';
import AverageGradeChart from "../components/AverageGradeChart";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  "chart-bar": BarChart,
  "stacked-bar-chart": StackedBarChart,
  "heading-text": HeadingText,
  "healthcare-affordability-index": HealthcareAffordabilityIndexChart,
  "average-grade-chart": AverageGradeChart
};

storyblokInit({
  accessToken: "JD5QuR8rcNxlPx7GGrPVWgtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "",
  },
});

function MyApp({ Component, pageProps }) {
  return  <div className="container mx-auto px-4">
      <Component {...pageProps} />
    </div>
}

export default MyApp;
