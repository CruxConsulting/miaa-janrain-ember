import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({

  janrainClientId: computed('', function () {
    if (window.location.hostname === 'lvh.me') { return 'hrf7zvyde7ms6dph9dd2vr24jqxvxcks';}
    if (window.location.hostname === 'mon-rdv-pharma-ui.herokuapp.com') { return 'x2cdvqk2nu8664kfu6b4quhzhre9gf3e';}
  }),

  didInsertElement() {
    this._super(...arguments);

    window.miaa_onWidgetLoaded = () => {
      janrain.settings.capture.clientId = this.get('janrainClientId');
    }

    window.miaa_onCaptureLoginSuccess = function(result) {
        console.log("miaa_onCaptureLoginSuccess");
        document.getElementById("captureSignInLink").style.display = 'none';
        document.getElementById("captureRegisterLink").style.display = 'none';
        document.getElementById("captureSignOutLink").style.display = '';
        document.getElementById("captureProfileLink").style.display = '';
    }

    window.miaa_onCaptureSessionFound = function(result) {
        console.log("miaa_onCaptureSessionFound");
        document.getElementById("captureSignInLink").style.display = 'none';
        document.getElementById("captureRegisterLink").style.display = 'none';
        document.getElementById("captureSignOutLink").style.display = '';
        document.getElementById("captureProfileLink").style.display = '';
    }

    window.miaa_onCaptureSessionNotFound = function(){
        document.getElementById("captureSignInLink").style.display = '';
        document.getElementById("captureRegisterLink").style.display = '';
        document.getElementById("captureSignOutLink").style.display = 'none';
        document.getElementById("captureProfileLink").style.display = 'none';
    }

    window.miaa_onCaptureRegistrationSuccess = function(result){
        console.log("miaa_onCaptureRegistrationSuccess");
    }

    window.miaa_onCaptureSessionEnded = function(result) {
        console.log("miaa_onCaptureSessionEnded");
        miaa_onCaptureSessionNotFound();
    }

    window.miaa_onSecondScreenSaved = function(){
        console.log("miaa_onSecondScreenSaved");
    }
  },

  actions: {
    signMeIn() {
      document.getElementById('miaaNonModal').style.display = '';
      janrain.capture.ui.renderScreen('signIn');
    },

    register() {
      document.getElementById('miaaNonModal').style.display = '';
      janrain.capture.ui.renderScreen('traditionalRegistration');
    }
  }

});
