import ResultsScreen from './ResultsScreen';
import DefaultScreen from './DefaultScreen';

export default function ResultsSection({ displayResults }) {
  if (displayResults) {
    return <ResultsScreen />;
  } else {
    return <DefaultScreen />;
  }
}
