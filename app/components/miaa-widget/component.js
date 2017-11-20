import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);

    this.$().append('<script src="https://cdn-stg.miaaguard.com/jnj_6iQyNXjgZn/widget/pl_pl_ePpmJqDa9W/js/tether.min.js"></script>');
    this.$().append('<script src="https://cdn-stg.miaaguard.com/jnj_6iQyNXjgZn/widget/pl_pl_ePpmJqDa9W/js/bootstrap.js"></script>');
    this.$().append('<script src="https://cdn-stg.miaaguard.com/jnj_6iQyNXjgZn/widget/pl_pl_ePpmJqDa9W/js/phoneLibCompiled.js"></script>');
    this.$().append('<script src="https://cdn-stg.miaaguard.com/jnj_6iQyNXjgZn/widget/pl_pl_ePpmJqDa9W/scripts/miaa.js"></script>');
  },

  actions: {
    signMeIn() {
      document.getElementById('miaaNonModal').style.display = '';
      janrain.capture.ui.renderScreen('signIn');
    }
  }

});
