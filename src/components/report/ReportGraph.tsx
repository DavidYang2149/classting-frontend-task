import { VictoryPie } from 'victory';

interface Prop {
  correctCount: number;
  inCorrectCount: number;
}

const ReportGraph = ({ correctCount, inCorrectCount }: Prop) => {
  return (
    <svg className="mx-auto" width={300} height={300}>
      <VictoryPie
        standalone={false}
        colorScale={['tomato', 'gray']}
        animate={{
          duration: 100,
        }}
        innerRadius={75}
        width={300}
        height={300}
        data={[
          { x: `정답: ${correctCount}`, y: correctCount },
          { x: `오답: ${inCorrectCount}`, y: inCorrectCount },
        ]}
      />
    </svg>
  );
};

export default ReportGraph;
