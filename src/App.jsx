import './styles/reset.css';
import InputSection from './components/InputSection';
import ResultsSection from './components/ResultsSection';

export default function App() {
  return (
    <div className='calculator'>
      <InputSection />
      <ResultsSection />
    </div>
  );
}
