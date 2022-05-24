<template>
  <div class="clockWrapper">
    <div class="logoClock">
      <div class="square">
      </div>
      <div class="firstRing">
        <div class="secondRing">
          <div class="thirdRing">
            <div class="thirdRing">
              <div class="fourthRing">
                <div class="fourthRing">
                  <div class="fifthRing">
                    <div class="sixthRing">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="logoMenu">
      <div class="CLOCKWISE">
        CLOCKWISE
      </div>
      <div class="Software">
        Software
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
* {
  padding: 0px;
  margin: 0px;
}

.clockWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  .logoMenu{

    .CLOCKWISE {
      margin-left: 8px;
      color: white;
      width: 80px;
      height: 16px;
      font-family: "Catamaran";
      font-size: 10px;
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.08px;
    }

    .Software {
      width: 42px;
      height: 11px;
      margin-left: 8px;
      font-family: "OpenSans";
      font-size: 8px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.07px;
      color: white;
    }
  }

  .logoClock {
    display: flex;
    align-items: center;
    justify-content: center;

    .square {
      position: relative;
      left: 40px;
      top: -10px;
      width: 20px;
      height: 20px;
      background: black;
      z-index: 50;
    }

    .firstRing {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: white;

      .secondRing {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        background-color: black;

        .thirdRing {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background-color: white;

          .fourthRing {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 25px;
            width: 25px;
            border-radius: 50%;
            background-color: black;

            .fifthRing {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 20px;
              width: 20px;
              border-radius: 50%;
              background-color: white;

              .sixthRing {
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
                height: 15px;
                width: 15px;
                border-radius: 50%;
                background-color: black;

              }
            }
          }
        }
      }

    }
  }

}

</style>