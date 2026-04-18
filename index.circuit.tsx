import { EC11E09204A4 } from "./imports/EC11E09204A4"
import { I2CDisplayHeader4 } from "./I2CDisplayHeader4"
import { KeyMatrix } from "@tsci/abse.keyboard-utils"
import { PICO } from "./imports/PICO"
import { HS154L03W2C01 } from "./imports/HS154L03W2C01"

// biome-ignore lint: This file contains keyboard layout data
export const custom4x4 = [
  [{ x: -0.5, y: -0.5 }, "B1", "B2", "B3", "B4"],
  [{ x: -0.5 }, "B5", "B6", "B7", "B8"],
  [{ x: -0.5 }, "B9", "B10", "B11", "B12"],
  [{ x: -0.5 }, "B13", "B14", "B15", "B16"],
]

export default () => {
  return (
    <board width={102} height={138} autorouterVersion="v4" layers={2}  >
      <KeyMatrix
        pcbX={9}
        pcbY={-15}
        colToMicroPin={["net.MATRIX_COL0", "net.MATRIX_COL1", "net.MATRIX_COL2", "net.MATRIX_COL3"]}
        rowToMicroPin={["net.MATRIX_ROW0", "net.MATRIX_ROW1", "net.MATRIX_ROW2", "net.MATRIX_ROW3"]}
        layout={custom4x4}
      />




      <PICO
        name="U1"
        pcbY={55}
        pcbX={14}
        layer="bottom"
        connections={{
          GP0: "net.I2C_SDA",
          GP1: "net.I2C_SCL",
          GP2: "net.MATRIX_ROW0",
          GP3: "net.MATRIX_ROW1",
          GP4: "net.MATRIX_ROW2",
          GP5: "net.MATRIX_ROW3",
          GP6: "net.MATRIX_COL0",
          GP7: "net.MATRIX_COL1",
          GP8: "net.MATRIX_COL2",
          GP9: "net.MATRIX_COL3",
          GP10: "net.ENC_L_A_FILTER",
          GP11: "net.ENC_L_B_FILTER",
          GP12: "net.ENC_R_A_FILTER",
          GP13: "net.ENC_R_B_FILTER",
          GND8: "net.GND",
          GND1: "net.GND",
          pin36: "net.V3_3",
        }}
      />
      <EC11E09204A4
        name="U2"
        pcbY={26}
        pcbX={-35}
        layer="top"
        connections={{
          pin9: "net.GND",
          pin10: "net.ENC_L_B",
          pin8: "net.ENC_L_A",
        }}
      />
      <EC11E09204A4
        name="U3"
        pcbY={26}
        pcbX={35}
        layer="top"
        connections={{
          pin9: "net.GND",
          pin10: "net.ENC_R_B",
          pin8: "net.ENC_R_A",
        }}
      />
      <HS154L03W2C01
        name="J1"
        pcbY={40}
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
        pcbX={37.5}
        pcbY={14}
        connections={{ pin1: "net.V3_3", pin2: "net.ENC_R_A" }}
      />
      <resistor
        name="R20"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={32.5}
        pcbY={14}
        connections={{ pin1: "net.ENC_R_B", pin2: "net.V3_3" }}
      />
      <resistor
        name="R30"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={37.5}
        pcbY={12}
        connections={{ pin1: "net.ENC_R_A_FILTER", pin2: "net.ENC_R_A" }}
      />
      <resistor
        name="R40"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={32.5}
        pcbY={12}
        pcbRotation={180}
        connections={{ pin1: "net.ENC_R_B_FILTER", pin2: "net.ENC_R_B" }}
      />
      <capacitor
        name="C10"
        capacitance={"10nF"}
        footprint={"0603"}
        pcbRotation={180}
        pcbX={37.5}
        pcbY={16}
        connections={{ pin1: "net.ENC_R_A_FILTER", pin2: "net.GND" }}
      />
      <capacitor
        name="C20"
        capacitance={"10nF"}
        footprint={"0603"}
        pcbRotation={180}
        pcbX={32.5}
        pcbY={16}
        connections={{ pin1: "net.GND", pin2: "net.ENC_R_B_FILTER" }}
      />

      <resistor
        name="R50"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={-37.5}
        pcbY={14}
        connections={{ pin1: "net.ENC_L_B", pin2: "net.V3_3" }}
      />
      <resistor
        name="R60"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={-32.5}
        pcbY={14}
        connections={{ pin1: "net.V3_3", pin2: "net.ENC_L_A" }}
      />
      <resistor
        name="R70"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={-37.5}
        pcbY={12}
        connections={{ pin1: "net.ENC_L_B_FILTER", pin2: "net.ENC_L_B" }}
      />
      <resistor
        name="R80"
        resistance={"10k"}
        footprint={"0603"}
        pcbX={-32.5}
        pcbY={12}
        pcbRotation={180}
        connections={{ pin1: "net.ENC_L_A_FILTER", pin2: "net.ENC_L_A" }}
      />
      <capacitor
        name="C30"
        capacitance={"10nF"}
        footprint={"0603"}
        pcbRotation={180}
        pcbX={-37.5}
        pcbY={16}
        connections={{ pin1: "net.ENC_L_B_FILTER", pin2: "net.GND" }}
      />
      <capacitor
        name="C40"
        capacitance={"10nF"}
        footprint={"0603"}
        pcbRotation={180}
        pcbX={-32.5}
        pcbY={16}
        connections={{ pin1: "net.GND", pin2: "net.ENC_L_A_FILTER" }}
      />

      <copperpour layer={"top"} connectsTo="net.GND" />
    </board>
  )
}
