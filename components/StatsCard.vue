<template>
  <Card color="transparent" shadow="false">
    <Typography variant="h1" class="font-bold" color="blue-gray">
      {{ count }}
    </Typography>
    <Typography variant="h6" color="blue-gray" class="mt-1 font-medium">
      {{ title }}
    </Typography>
  </Card>
</template>

<script setup lang="ts">
import { Card, Typography } from '@material-tailwind/vue'
interface Props {
  count: string
  title: string
}
const { count, title } = defineProps<Props>()
</script>
