import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["INT"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["P00"],
  pin5: ["P01"],
  pin6: ["P02"],
  pin7: ["P03"],
  pin8: ["P04"],
  pin9: ["P05"],
  pin10: ["P06"],
  pin11: ["P07"],
  pin12: ["GND"],
  pin13: ["P10"],
  pin14: ["P11"],
  pin15: ["P12"],
  pin16: ["P13"],
  pin17: ["P14"],
  pin18: ["P15"],
  pin19: ["P16"],
  pin20: ["P17"],
  pin21: ["A0"],
  pin22: ["SCL"],
  pin23: ["SDA"],
  pin24: ["VCC"]
} as const

export const TCA9535PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C130204"
  ]
}}
      manufacturerPartNumber="TCA9535PWR"
      footprint={<footprint>
        <smtpad portHints={["pin6"]} pcbX="-0.324866mm" pcbY="-3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.974852mm" pcbY="-3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.624838mm" pcbY="-3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.274824mm" pcbY="-3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.92481mm" pcbY="-3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-3.574796mm" pcbY="-3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.324866mm" pcbY="-3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="3.574796mm" pcbY="-3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.925064mm" pcbY="-3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="2.275078mm" pcbY="-3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.625092mm" pcbY="-3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.975106mm" pcbY="-3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-0.974852mm" pcbY="3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-1.624838mm" pcbY="3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-2.274824mm" pcbY="3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-2.92481mm" pcbY="3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-3.574796mm" pcbY="3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-0.324866mm" pcbY="3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="3.574796mm" pcbY="3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="2.925064mm" pcbY="3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.275078mm" pcbY="3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="1.625092mm" pcbY="3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0.975106mm" pcbY="3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="0.324866mm" pcbY="3.0226mm" width="0.3999992mm" height="1.6500094mm" shape="rect" />
<silkscreenpath route={[{"x":3.937000000000012,"y":1.9049999999999727},{"x":3.937000000000012,"y":-1.9050000000000864}]} />
<silkscreenpath route={[{"x":-3.8862000000001444,"y":-1.7526000000000295},{"x":-3.8862000000001444,"y":-1.9050000000000864},{"x":3.937000000000012,"y":-1.9050000000000864}]} />
<silkscreenpath route={[{"x":-3.8862000000001444,"y":1.7526000000000295},{"x":-3.8862000000001444,"y":1.9049999999999727},{"x":3.937000000000012,"y":1.9049999999999727}]} />
<silkscreenpath route={[{"x":-3.8862000000001444,"y":0.48260000000004766},{"x":-3.8862000000001444,"y":1.7526000000000295}]} />
<silkscreenpath route={[{"x":-3.8862000000001444,"y":-1.7526000000000295},{"x":-3.8862000000001444,"y":-0.48260000000004766}]} />
<silkscreenpath route={[{"x":-3.8862000000001444,"y":0.4572000000001708},{"x":-3.8862000000001444,"y":-0.48260000000004766}]} />
<silkscreentext text="{NAME}" pcbX="-0mm" pcbY="4.8354mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.1870000000001255,"y":4.08540000000005},{"x":4.187000000000012,"y":4.08540000000005},{"x":4.187000000000012,"y":-4.110800000000154},{"x":-4.1870000000001255,"y":-4.110800000000154},{"x":-4.1870000000001255,"y":4.08540000000005}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C130204.obj?uuid=4564b07290534b8ea1373eede2664361",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C130204.step?uuid=4564b07290534b8ea1373eede2664361",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  )
}