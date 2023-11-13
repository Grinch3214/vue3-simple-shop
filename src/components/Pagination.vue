<template>
  <ul class="inline-flex">
    <li>
      <button
        type="button"
				class="pagination-btn rounded-l-lg"
				@click="onClickFirstPage"
				:disabled="isInFirstPage"
      >
        First
      </button>
    </li>

    <li>
      <button
        type="button"
				class="pagination-btn"
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
				class="pagination-btn"
      >
        {{ page.name }}
      </button>
    </li>

    <li>
      <button
        type="button"
				class="pagination-btn"
				@click="onClickNextPage"
				:disabled="isInLastPage"
      >
        Next
      </button>
    </li>

    <li>
      <button
        type="button"
				class="pagination-btn rounded-r-lg"
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
		emit('pagechanged', props.currentPage - 1)
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
.pagination-btn {
	@apply flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 disabled:bg-red-100 disabled:text-gray-700;
}
.active {
  @apply disabled:bg-red-700/60 disabled:text-white;
}
</style>
