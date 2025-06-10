<template>
  <Card class="mt-6" shadow="false">
    <CardHeader floated="false" class="h-80 rounded-none">
      <img :src="img" alt="event content" class="h-full w-full object-cover" />
    </CardHeader>
    <CardBody class="py-6">
      <Typography variant="h5" class="mb-1">
        {{ title }}
      </Typography>
      <Typography class="font-normal text-blue-gray-500">
        {{ des }}
      </Typography>
      <div class="mt-6 flex items-center gap-4">
        <Avatar :src="img" alt="avatar" />
        <div>
          <Typography variant="h6" class="mb-0.5">
            {{ name }}
          </Typography>
          <Typography variant="small" class="font-normal !text-gray-500">
            {{ position }}
          </Typography>
        </div>
        <Typography
            variant="small"
            color="blue-gray"
            class="ml-auto font-normal uppercase"
        >
          {{ panel }}
        </Typography>
      </div>
    </CardBody>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/vue'

interface Props {
  title: string
  des: string
  name: string
  position: string
  panel: string
  img: string
}
const props = defineProps<Props>()
const { title, des, name, position, panel, img } = props
</script>
