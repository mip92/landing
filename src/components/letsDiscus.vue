<template>
  <form @submit.prevent>
    <div class="discus_form">
      <div class="discus_form_content">
        <div class="discus_form_topic">
          <div>LET’S DISCUSS YOUR BUSINESS CASE!</div>
        </div>
        <div class="discus_form_body">
          Everything is possible!
        </div>
        <div class="first_input_line">
          <div class="discus_first_name">
            <my-input
                v-model="firstName"
                type="text"
                model-placeholder="First Name"
            >
            </my-input>
          </div>
          <div class="discus_last_name">
            <my-input
                v-model="lastName"
                type="text"
                model-placeholder="Last Name"
            >
            </my-input>
          </div>
        </div>
        <div class="second_input_line">
          <div class="discus_email">
            <my-input
                v-model="email"
                type="text"
                model-placeholder="E-Mail"
            >
            </my-input>
          </div>
        </div>
        <div class="third_input_line">
          <div class="discus_text_area">
            <my-text-area
                v-model="someText"
                type="text"
                model-placeholder="Some brief description or comments"
            >
            </my-text-area>
          </div>
        </div>
        <div class="data_protection_policy">
          <span class="By-pressing-the-req">
            By pressing the “request a consultation” button you agree with
            <span class="text-style-1">
                  <a href="https://www.google.com">data protection</a>
            </span>
            policy
          </span>
        </div>
        <div class="discus_form_btn">
          <my-form-button>Request a Consultation</my-form-button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import MyFormButton from "@/components/UI/MyFormButton";

export default {
  components: {MyFormButton},
  props: {},
  data() {
    return {
      firstName: 'Klaus',
      lastName: 'Voormann',
      email: ' klaus.voormann@email.de',
      someText: 'My business case is completely different, so I want to discuss it with you.',
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "src/style/style";


@media screen and (min-width: 768px) {
  .discus_form {
    display: flex;
    justify-content: center;

    .discus_form_content {
      display: flex;
      flex-direction: column;
      width: 504px;

      .discus_form_topic {
        height: 60px;
        margin: 8px 192px 20px 0;
        @include topicContent();
        color: $black;
      }

      .discus_form_body {
        opacity: 0.75;
        @include eggSmallBody();
        color: $black;
      }

      .first_input_line {
        display: flex;
        justify-content: space-between;

        .discus_first_name {
          margin-top: 73px;
          width: 240px
        }

        .discus_last_name {
          margin-top: 73px;
          width: 240px
        }
      }

      .second_input_line {
        .discus_email {
          margin-top: 54px;
          width: 100%;
        }
      }

      .third_input_line {
        .discus_text_area {
          margin-top: 54px;
          width: 100%;
          height: 132px;
        }
      }

      .data_protection_policy {
        margin: 25px 180px 50px 0px;

        .By-pressing-the-req {
          width: 345px;
          height: 40px;
          @include eggSmallBody();
          color: $black;

          .text-style-1 {
            font-weight: 600;
          }
        }
      }

      .discus_form_btn {
        margin-left: auto;
        margin-bottom: 33px;
      }
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 767.98px) {
  .discus_form {

    display: flex;
    flex-direction: column;
    align-items: center;
    .discus_form_content {
      display: flex;
      flex-direction: column;

      width: 295px;

      .discus_form_topic {
        position: relative;
        top: -25px;
        width: 230px;
        margin-right: auto;
        height: 20px;
        @include eggMiddleTitle();
        text-align: start;
        color: $black;
      }
      .discus_form_body {
        margin-top: 10px;
        opacity: 0.75;
        @include eggSmallBody();
        color: $black;
      }
      .first_input_line {

        .discus_first_name {
          display: flex;
          justify-content: center;
          margin-top: 30px;

        }
        .discus_last_name {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          width: 295px
        }
      }
      .second_input_line {
        .discus_email {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          width: 100%;
        }
      }
      .third_input_line {
        .discus_text_area {
          display: flex;
          justify-content: center;
          margin-top: 43px;
          width: 100%;
          height: 132px;
        }
      }
      .data_protection_policy {
        margin-top: 25px;
        width: 295px;
        .By-pressing-the-req {
          width: 295px;
          height: 40px;
          @include eggSmallBody();
          color: $black;

          .text-style-1 {
            font-weight: 600;
          }
        }
      }
      .discus_form_btn {
        width: 295px;
        margin-left: auto;
        margin-top: 25px;
        margin-bottom: 38px;
      }
    }
  }
}

</style>