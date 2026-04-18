import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["VCC"],
  pin3: ["SCL"],
  pin4: ["SDA"]
} as const

export const HS154L03W2C01 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7465999"
  ]
}}
      manufacturerPartNumber="HS154L03W2C01"
      footprint={<footprint>
        <hole pcbX="-18.699988mm" pcbY="15.79999385mm" diameter="2.999994mm" />
<hole pcbX="-18.699988mm" pcbY="-17.19994015mm" diameter="2.999994mm" />
<hole pcbX="18.699988mm" pcbY="-17.19994015mm" diameter="2.999994mm" />
<hole pcbX="18.699988mm" pcbY="15.79999385mm" diameter="2.999994mm" />
<platedhole  portHints={["pin1"]} pcbX="-3.81mm" pcbY="16.39994185mm" outerDiameter="1.6999966mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-1.27mm" pcbY="16.39994185mm" outerDiameter="1.6999966mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.27mm" pcbY="16.39994185mm" outerDiameter="1.6999966mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="3.81mm" pcbY="16.39994185mm" outerDiameter="1.6999966mm" holeDiameter="0.999998mm" shape="circle" />
<silkscreenpath route={[{"x":5.078018799999995,"y":-15.667862950000199},{"x":5.078018799999995,"y":-19.698868350000225}]} />
<silkscreenpath route={[{"x":-5.08195580000006,"y":-15.667862950000199},{"x":5.078018799999995,"y":-15.667862950000199}]} />
<silkscreenpath route={[{"x":21.198992399999952,"y":-19.698868350000225},{"x":5.078018799999995,"y":-19.698868350000225}]} />
<silkscreenpath route={[{"x":-5.08195580000006,"y":-19.698868350000225},{"x":-5.08195580000006,"y":-15.667862950000199}]} />
<silkscreenpath route={[{"x":-21.198941600000126,"y":-19.698868350000225},{"x":-5.08195580000006,"y":-19.698868350000225}]} />
<silkscreenpath route={[{"x":-21.198941600000126,"y":-19.698868350000225},{"x":-21.198941600000126,"y":18.30905664999989}]} />
<silkscreenpath route={[{"x":-21.199932200000035,"y":18.30006504999983},{"x":21.198992399999952,"y":18.30006504999983},{"x":21.198992399999952,"y":-19.698868350000225}]} />
<silkscreenpath route={[{"x":-21.112937200000033,"y":-19.6848475500002},{"x":-6.813956399999938,"y":-19.6848475500002},{"x":-6.813956399999938,"y":-16.768876750000118},{"x":-5.872962600000051,"y":-16.768876750000118},{"x":-5.872962600000051,"y":-18.273852150000266},{"x":6.074003599999969,"y":-18.273852150000266},{"x":6.074003599999969,"y":-16.580865950000316},{"x":7.015022799999997,"y":-16.580865950000316},{"x":7.015022799999997,"y":-19.496862150000197},{"x":19.996988200000033,"y":-19.496862150000197}]} />
<silkscreentext text="{NAME}" pcbX="-0.0254mm" pcbY="24.53175385mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-21.48440000000005,"y":23.78175384999986},{"x":21.43360000000007,"y":23.78175384999986},{"x":21.43360000000007,"y":-19.974446150000176},{"x":-21.48440000000005,"y":-19.974446150000176},{"x":-21.48440000000005,"y":23.78175384999986}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7465999.obj?uuid=aa861fa4eb4a4bd2a39608f58e47f232",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7465999.step?uuid=aa861fa4eb4a4bd2a39608f58e47f232",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -8.480405999999999 },
      }}
      {...props}
    />
  )
}