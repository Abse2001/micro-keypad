import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["P00"],
  pin2: ["P01"],
  pin3: ["P02"],
  pin4: ["P03"],
  pin5: ["P04"],
  pin6: ["P05"],
  pin7: ["P06"],
  pin8: ["P07"],
  pin9: ["GND"],
  pin10: ["P10"],
  pin11: ["P11"],
  pin12: ["P12"],
  pin13: ["P13"],
  pin14: ["P14"],
  pin15: ["P15"],
  pin16: ["P16"],
  pin17: ["P17"],
  pin18: ["A0"],
  pin19: ["SCL"],
  pin20: ["SDA"],
  pin21: ["VCC"],
  pin22: ["INT"],
  pin23: ["A1"],
  pin24: ["A2"],
  pin25: ["EP"]
} as const

export const TCA9555RTWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C140277"
  ]
}}
      manufacturerPartNumber="TCA9555RTWR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.249934000000053mm" pcbY="-1.99999600000001mm" width="0.2800096mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.7500620000000708mm" pcbY="-1.99999600000001mm" width="0.2800096mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.2499359999999342mm" pcbY="-1.99999600000001mm" width="0.2800096mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.24993599999982052mm" pcbY="-1.99999600000001mm" width="0.2800096mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.7500619999999572mm" pcbY="-1.99999600000001mm" width="0.2800096mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.2499339999999393mm" pcbY="-1.99999600000001mm" width="0.2800096mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.9999960000001238mm" pcbY="-1.249934000000053mm" width="0.6999986mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.9999960000001238mm" pcbY="-0.7500619999999572mm" width="0.6999986mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.9999960000001238mm" pcbY="-0.2499360000000479mm" width="0.6999986mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.9999960000001238mm" pcbY="0.2499360000000479mm" width="0.6999986mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.9999960000001238mm" pcbY="0.7500620000001845mm" width="0.6999986mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.9999960000001238mm" pcbY="1.249934000000053mm" width="0.6999986mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.2499339999999393mm" pcbY="1.99999600000001mm" width="0.2800096mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.7500619999999572mm" pcbY="1.99999600000001mm" width="0.2800096mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="0.24993599999982052mm" pcbY="1.99999600000001mm" width="0.2800096mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-0.2499359999999342mm" pcbY="1.99999600000001mm" width="0.2800096mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-0.7500620000000708mm" pcbY="1.99999600000001mm" width="0.2800096mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-1.2420600000000377mm" pcbY="1.99999600000001mm" width="0.2800096mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-1.99999600000001mm" pcbY="1.249934000000053mm" width="0.6999986mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-1.99999600000001mm" pcbY="0.7500620000001845mm" width="0.6999986mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-1.99999600000001mm" pcbY="0.2499360000000479mm" width="0.6999986mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-1.99999600000001mm" pcbY="-0.2499360000000479mm" width="0.6999986mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-1.99999600000001mm" pcbY="-0.7500619999999572mm" width="0.6999986mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-1.99999600000001mm" pcbY="-1.249934000000053mm" width="0.6999986mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="0.01269999999999527mm" pcbY="0mm" width="2.7999944mm" height="2.7999944mm" shape="rect" />
<silkscreenpath route={[{"x":2.1628099999998085,"y":1.7500345999999354},{"x":2.1628099999998085,"y":2.1501353999999537},{"x":1.7627599999999575,"y":2.1501353999999537}]} />
<silkscreenpath route={[{"x":-2.137384599999905,"y":1.7500345999999354},{"x":-2.137384599999905,"y":2.1501353999999537},{"x":-1.737359999999967,"y":2.1501353999999537}]} />
<silkscreenpath route={[{"x":-1.737359999999967,"y":-2.1501353999999537},{"x":-2.137384599999905,"y":-2.1501353999999537},{"x":-2.137384599999905,"y":-1.750085399999989}]} />
<silkscreenpath route={[{"x":2.1628099999998085,"y":-1.750085399999989},{"x":2.1628099999998085,"y":-2.1501353999999537},{"x":1.7627599999999575,"y":-2.1501353999999537}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=05ad786f21fc4a75918e52cab22372a2&pn=C140277",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -1.549995300000046 },
      }}
      {...props}
    />
  )
}