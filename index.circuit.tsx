import {XiaoReceiver} from "@tscircuit/common"
import {EC11E09204A4} from "./imports/EC11E09204A4"
import { TCA9555RTWR } from "imports/TCA9555RTWR"

// I2CDisplayHeader4.tsx

export type I2CDisplayHeader4Props = {
  name: string
  pcbX?: number | string
  pcbY?: number | string
  pcbRotation?: number | string
  connections?: Partial<{
    GND: string
    VCC: string
    SCL: string
    SDA: string
  }>
}

/**
 * 4-pin 0.1" (2.54mm) through-hole header:
 * [1] GND, [2] VCC, [3] SCL, [4] SDA   (left -> right)
 */
export const I2CDisplayHeader4 = ({
  name,
  pcbX,
  pcbY,
  pcbRotation,
  connections,
}: I2CDisplayHeader4Props) => {
  // 4 pins on 2.54mm pitch, centered around origin:
  // x = -3.81, -1.27, +1.27, +3.81  (i.e. ±1.5P and ±0.5P)
  const P = 2.54
  const xs = [-1.5 * P, -0.5 * P, 0.5 * P, 1.5 * P]

  return (
    <chip
      name={name}
      pcbX={pcbX}
      pcbY={pcbY}
      pcbRotation={pcbRotation}
      connections={connections}
      pinLabels={{
        pin1: "GND",
        pin2: "VCC",
        pin3: "SCL",
        pin4: "SDA",
      }}
      footprint={
        <footprint>
          {xs.map((x, i) => (
            <platedhole
              portHints={[String(i + 1)]}
              pcbX={x}
              pcbY={0}
              holeDiameter="1.0mm"
              outerDiameter="1.8mm"
              shape="circle"
            />
          ))}
          <hole pcbX={-10} pcbY={-0.5} diameter="3.2mm" />
          <hole pcbX={10} pcbY={-0.5} diameter="3.2mm" />
          {/* <hole pcbX={-10} pcbY={-23.3} diameter="3.2mm" />
          <hole pcbX={10} pcbY={-23.3} diameter="3.2mm" /> */}
        </footprint>
      }
    />
  )
}

export default () => {


  return (
  <board width={70} height={100} autorouter={"laser_prefab"} layers={1}>
    {Array.from({ length: 4 }).map((_, row) =>
      Array.from({ length: 4 }).map((_, col) => {
        const pcbX = -29.5 + col * 18
        const pcbY = -37 + row * 18

        return (
          <>
          <chip
            key={`k-${row}-${col}`}
            footprint={
              <footprint>
                <platedhole portHints={["pin1"]} holeDiameter={1.5} outerDiameter={2.2} shape="circle"/>
                <platedhole portHints={["pin2"]} holeDiameter={1.5} outerDiameter={2.2}  shape="circle" pcbX={-6.35} pcbY={-2.55}/>
              </footprint>
            }
            name={`K${row * 4 + col + 1}`}
            pcbX={pcbX}
            pcbY={pcbY}
            layer={"bottom"}
          />
          <diode
            name={`D${row * 4 + col + 1}`}
            pcbX={pcbX+1.7}
            pcbY={pcbY-9}
            footprint={"kicad:Diode_SMD/D_SOD-123"}
            pcbRotation={180}
            connections={{pin2: `K${row * 4 + col + 1}.pin1`}}
          />
          <hole
            pcbX={pcbX+2.5}
            pcbY={pcbY-5}
            diameter={4}
          /> 
          <hole
            pcbX={pcbX-2.5}
            pcbY={pcbY-5}
            diameter={1.7}
          />
          <hole
            pcbX={pcbX+7.5}
            pcbY={pcbY-5}
            diameter={1.7}
          />
          <silkscreenrect
            pcbX={pcbX+2.5}
            pcbY={pcbY-5}
            layer={"top"}
            width={14}
            height={14}
          />
          </>
        )
      })
    )}
    
    <XiaoReceiver name="U1" pcbY={38} connections={{pin6:"net.SCL",pin12:"net.V3_3"}}  />
    <EC11E09204A4 name="U2" pcbY={38} pcbX={-25} pcbRotation={90} layer={"bottom"}/>
    <EC11E09204A4 name="U3" pcbY={38} pcbX={25} pcbRotation={90} layer={"bottom"}/>
    <I2CDisplayHeader4 name="U4" pcbY={24} pcbX={0} pcbRotation={180} />
    <TCA9555RTWR name="U5" pcbY={24} pcbX={-18} pcbRotation={-90} connections={{pin19:"net.SCL",pin21:"net.V3_3"}} />
  </board>
)}
