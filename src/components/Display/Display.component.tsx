import {
  AreaDisplay,
  HeaderDisplay,
  ResultDisplay,
  WrapperDisplay,
} from './Display.style';

interface DisplayType {
  data: string;
  result: string;
}

function Display({ data, result }: DisplayType) {
  return (
    <WrapperDisplay>
      <HeaderDisplay>
        <i className="fa fa-cog"></i>
      </HeaderDisplay>
      <AreaDisplay>
        <textarea value={data} />
      </AreaDisplay>
      <ResultDisplay>
        <p>=</p>
        <p>{result}</p>
      </ResultDisplay>
    </WrapperDisplay>
  );
}

export default Display;
