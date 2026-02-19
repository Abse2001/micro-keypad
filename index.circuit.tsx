import {XiaoReceiver} from "@tscircuit/common"
import {EC11E09204A4} from "./imports/EC11E09204A4"
import { I2CDisplayHeader4 } from "I2CDisplayHeader4"
import { KeyMatrix } from "@tsci/abse.keyboard-utils"



// biome-ignore lint: This file contains keyboard layout data
export const custom4x4 = [
  ["B1", "B2", "B3", "B4"],
  ["B5", "B6", "B7", "B8"],
  ["B9", "B10", "B11", "B12"],
  ["B13", "B14", "B15", "B16"],
]



export default () => {


  return (
  <board width={70} height={100} autorouterVersion="v1" layers={2}>
          <KeyMatrix
            
            pcbX={8}
            colToMicroPin={
              [
                "net.C1",
                "net.C2",
                "net.C3",
                "net.C4",
              ]
            }
            rowToMicroPin={
              [
                "net.R1",
                "net.R2",
                "net.R3",
                "net.R4",
              ]
            }
            layout={custom4x4}
          />
    
    <XiaoReceiver name="U1" pcbY={38} connections={{pin1:"net.R1",pin2:"net.R2",pin3:"net.R3",pin4:"net.R4", pin5:"net.C1",pin6:"net.C2",pin7:"net.C3",pin14:"net.C4"}} />
    <EC11E09204A4 name="U2" pcbY={38} pcbX={-25} pcbRotation={90} layer={"bottom"}/>
    <EC11E09204A4 name="U3" pcbY={38} pcbX={25} pcbRotation={90} layer={"bottom"}/>
    <I2CDisplayHeader4 name="U4" pcbY={24} pcbX={0} pcbRotation={180} />
  </board>
)}
