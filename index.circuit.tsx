import { XiaoReceiver } from "@tscircuit/common"
import { EC11E09204A4 } from "./imports/EC11E09204A4"
import { I2CDisplayHeader4 } from "./I2CDisplayHeader4"
import { KeyMatrix } from "@tsci/abse.keyboard-utils"
import { TCA9535PWR } from "./imports/TCA9535PWR"

// biome-ignore lint: This file contains keyboard layout data
export const custom4x4 = [
  [{ x: -0.5, y: -0.5 }, "B1", "B2", "B3", "B4"],
  [{ x: -0.5 }, "B5", "B6", "B7", "B8"],
  [{ x: -0.5 }, "B9", "B10", "B11", "B12"],
  [{ x: -0.5 }, "B13", "B14", "B15", "B16"],
]

export default () => {
  return (
    <board width={100} height={110} autorouterVersion="v4" layers={4} >
      <KeyMatrix
        pcbX={-0.7}
        pcbY={-9}
        colToMicroPin={["net.IOX_P04", "net.IOX_P05", "net.IOX_P06", "net.IOX_P07"]}
        rowToMicroPin={["net.IOX_P00", "net.IOX_P01", "net.IOX_P02", "net.IOX_P03"]}
        layout={custom4x4}
      />

      <XiaoReceiver
        name="U1"
        pcbY={38}
        connections={{
          pin1: "net.IOX_INT",
          pin5: "net.I2C_SDA",
          pin6: "net.I2C_SCL",
          pin9: "net.GND",
          pin10: "net.V3_3",
        }}
      />
      <EC11E09204A4
        name="U2"
        pcbY={40}
        pcbX={-25}
        layer="bottom"
        connections={{
          pin9: "net.GND",
          pin10: "net.ENC_L_B",
          pin8: "net.ENC_L_A",
        }}
      />
      <EC11E09204A4
        name="U3"
        pcbY={40}
        pcbX={25}
        layer="bottom"
        connections={{
          pin9: "net.GND",
          pin10: "net.ENC_R_B",
          pin8: "net.ENC_R_A",
        }}
      />
      <TCA9535PWR
        name="U4"
        pcbY={-10}
        pcbX={42}
        pcbRotation={-90}
        connections={{
          INT: "net.IOX_INT",
          A1: "net.GND",
          A2: "net.GND",
          P00: "net.IOX_P00",
          P01: "net.IOX_P01",
          P02: "net.IOX_P02",
          P03: "net.IOX_P03",
          P04: "net.IOX_P04",
          P05: "net.IOX_P05",
          P06: "net.IOX_P06",
          P07: "net.IOX_P07",
          GND: "net.GND",
          P10: "net.ENC_L_A",
          P11: "net.ENC_L_B",
          P12: "net.ENC_R_A",
          P13: "net.ENC_R_B",
          A0: "net.GND",
          SCL: "net.I2C_SCL",
          SDA: "net.I2C_SDA",
          VCC: "net.V3_3",
        }}
      />
      <I2CDisplayHeader4
        name="J1"
        pcbY={24}
        pcbX={0}
        pcbRotation={180}
        connections={{
          GND: "net.GND",
          VCC: "net.V3_3",
          SCL: "net.I2C_SCL",
          SDA: "net.I2C_SDA",
        }}
      />
      <resistor
        name="R10"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={27.5}
        pcbY={28}
        connections={{ pin1: "net.V3_3", pin2: "net.ENC_R_A" }}
      />
      <resistor
        name="R20"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={22.5}
        pcbY={28}
        connections={{ pin1: "net.ENC_R_B", pin2: "net.V3_3" }}
      />
      <resistor
        name="R30"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={27.5}
        pcbY={26}
        connections={{ pin1: "net.ENC_R_A_FILTER", pin2: "net.ENC_R_A" }}
      />
      <resistor
        name="R40"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={22.5}
        pcbY={26}
        pcbRotation={180}
        connections={{ pin1: "net.ENC_R_B_FILTER", pin2: "net.ENC_R_B" }}
      />
      <capacitor
        name="C10"
        capacitance={"10nF"}
        footprint={"0603"}
        pcbRotation={180}
        pcbX={27.5}
        pcbY={30}
        connections={{ pin1: "net.ENC_R_A_FILTER", pin2: "net.GND" }}
      />
      <capacitor
        name="C20"
        capacitance={"10nF"}
        footprint={"0603"}
        pcbRotation={180}
        pcbX={22.5}
        pcbY={30}
        connections={{ pin1: "net.GND", pin2: "net.ENC_R_B_FILTER" }}
      />

      <resistor
        name="R50"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={-27.5}
        pcbY={28}
        connections={{ pin1: "net.ENC_L_B", pin2: "net.V3_3" }}
      />
      <resistor
        name="R60"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={-22.5}
        pcbY={28}
        connections={{ pin1: "net.V3_3", pin2: "net.ENC_L_A" }}
      />
      <resistor
        name="R70"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={-27.5}
        pcbY={26}
        connections={{ pin1: "net.ENC_L_B_FILTER", pin2: "net.ENC_L_B" }}
      />
      <resistor
        name="R80"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={-22.5}
        pcbY={26}
        pcbRotation={180}
        connections={{ pin1: "net.ENC_L_A_FILTER", pin2: "net.ENC_L_A" }}
      />
      <capacitor
        name="C30"
        capacitance={"10nF"}
        footprint={"0603"}
        pcbRotation={180}
        pcbX={-27.5}
        pcbY={30}
        connections={{ pin1: "net.ENC_L_B_FILTER", pin2: "net.GND" }}
      />
      <capacitor
        name="C40"
        capacitance={"10nF"}
        footprint={"0603"}
        pcbRotation={180}
        pcbX={-22.5}
        pcbY={30}
        connections={{ pin1: "net.GND", pin2: "net.ENC_L_A_FILTER" }}
      />

      <copperpour layer={"top"} connectsTo="net.GND" />
    </board>
  )
}
