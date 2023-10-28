<template>
  <ul class="flex gap-2 m-5">
    <li>
      <button
        type="button"
				class="border px-3"
				@click="onClickFirstPage"
				:disabled="isInFirstPage"
      >
        First
      </button>
    </li>

    <li>
      <button
        type="button"
				class="border px-3"
				@click="onClickPreviousPage"
				:disabled="isInFirstPage"
      >
        Previous
      </button>
    </li>

    <li
      v-for="page in pages"
      :key="page.name"
    >
      <button
        type="button"
				@click="onClickPage(page.name)"
        :disabled="page.isDisabled"
				:class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <li>
      <button
        type="button"
				class="border px-3"
				@click="onClickNextPage"
				:disabled="isInLastPage"
      >
        Next
      </button>
    </li>

    <li>
      <button
        type="button"
				class="border px-3"
				@click="onClickLastPage"
				:disabled="isInLastPage"
      >
        Last
      </button>
    </li>
  </ul>
</template>

<script setup>
	import { computed } from 'vue'

	const props = defineProps({
		maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },    
    totalPages: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true,
			default: 1
    }
	})

	const startPage = computed(() => {
		if(props.currentPage === 1) { return 1 }

		if (props.currentPage === props.totalPages) {
			const start = props.totalPages - (props.maxVisibleButtons - 1)

			if(start === 0) {
				return 1
			} else {
				return start
			}
		}

		return props.currentPage - 1
	})

	const pages = computed(() => {
		const range = []

		console.log(startPage.value, 'startPage ')
		console.log(props.maxVisibleButtons, 'props.maxVisibleButtons')
		console.log(props.totalPages, 'props.totalPages')

		for (
			let i = startPage.value;
			i <= Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages);
			i++
		) {
			range.push({
				name: i,
				isDisabled: i === props.currentPage
			})
		}
		console.log(range)
		return range
	})

	const isInFirstPage = computed(() => {
		return props.currentPage === 1
	})

	const isInLastPage = computed(() => {
		return props.currentPage === props.totalPages
	})

	const isPageActive = (page) => {
		return props.currentPage === page
	}

	const emit = defineEmits(['pagechanged'])

	const onClickFirstPage = () => {
		emit('pagechanged', 1)
	}

	const onClickPreviousPage = () => {
		emit('pagechanged', props.currentPage -1)
	}

	const onClickPage = (page) => {
		emit('pagechanged', page)
	}

	const onClickNextPage = () => {
		emit('pagechanged', props.currentPage + 1)
	}

	const onClickLastPage = () => {
		emit('pagechanged', props.totalPages)
	}

</script>

<style scoped>
.active {
  background-color: #4AAE9B;
  color: #ffffff;
}
</style>
