<template>
  <div>
    <b-row v-for="(field, i) in fields" :key="i" ref="row">
      <b-col lg="4" class="mb-1">
        <b-form-group
          :label="
            field.main ? $t('arabicMainDimension') : $t('arabicDimension')
          "
        >
          <b-form-textarea
            v-model="field.arabicDimension"
            :placeholder="
              field.main ? $t('arabicMainDimension') : $t('arabicDimension')
            "
            rows="4"
          />
        </b-form-group>
      </b-col>
      <b-col lg="4" class="mb-1">
        <b-form-group
          :label="
            field.main ? $t('englishMainDimension') : $t('arabicDimension')
          "
        >
          <b-form-textarea
            v-model="field.englishDimension"
            :placeholder="
              field.main ? $t('englishMainDimension') : $t('arabicDimension')
            "
            rows="4"
          />
        </b-form-group>
      </b-col>
      <b-col lg="3" class="mb-1 custom-form">
        <label class="fs-5">{{ $t('inputs.price') }}</label>
        <b-form-group class="mt-3">
          <b-input-group>
            <b-input-group-prepend is-text>
              <UtilsTheFIcon icon="dollar-sign" />
            </b-input-group-prepend>
            <b-form-input
              v-model="field.price"
              :placeholder="$t('price')"
              type="number"
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <!-- Remove Button -->
      <b-col
        v-if="!field.main"
        lg="1"
        md="3"
        class="mt-2 d-flex justify-content-center align-items-center"
      >
        <UtilsTheFIcon
          icon="trash"
          class="text-danger"
          @click.native="$emit('removeItem', i)"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'RepeaterForm',
  props: {
    fields: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
