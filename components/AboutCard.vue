<template>
  <Card shadow="false">
    <CardBody class="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900">
      <Typography variant="h6" class="mb-4 text-center" color="white">
        {{ subTitle }}
      </Typography>
      <Typography variant="h4" class="text-center" color="white">
        {{ title }}
      </Typography>
      <Typography class="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal" color="white">
        {{ description }}
      </Typography>
      <Button color="white" size="sm">view details</Button>
    </CardBody>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardBody, Typography, Button } from '@material-tailwind/vue'
interface Props {
  title: string
  subTitle: string
  description: string
}
const { title, subTitle, description } = defineProps<Props>()
</script>
