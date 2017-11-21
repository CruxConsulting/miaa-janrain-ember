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
  }

});
