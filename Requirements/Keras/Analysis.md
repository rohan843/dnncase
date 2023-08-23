# Keras

<!-- ## Layers

### Layer 1

Writing the format for a layer, but this works everywhere, for metrics, activations, losses, etc.

**Name**:  Place layer name

**Hyperparameters**:

| name | input dtype/shape | use |
| ---- | ----------------- | --- |
|      |                   |     |
|      |                   |     |
|      |                   |     |

**Layer Inputs**:

1. All permitted layer inputs, with their shape and data type
2. ...
3. ...

**Layer Outputs**:

1. All layer outputs, with their shape and data type
2. ...
3. ...

**Extra Notes:**

1. Any extra notes about the layer
2. ...
3. ...

**Compatibility Concerns**:

1. If the current layer seems incompatible with our current design, write it here.
-->

## Contents

- [Keras](#keras)
  - [Contents](#contents)
  - [Activations](#activations)
    - [Deserialize](#deserialize)
    - [Elu](#elu)
    - [Exponential](#exponential)
    - [Gelu](#gelu)
    - [Get](#get)
    - [Hard Sigmoid](#hard-sigmoid)
    - [Linear](#linear)
    - [Mish](#mish)
    - [Relu](#relu)
    - [Selu](#selu)
    - [Serialize](#serialize)
    - [Sigmoid](#sigmoid)
    - [Softmax](#softmax)
    - [Softplus](#softplus)
    - [Softsign](#softsign)
    - [Swish](#swish)
    - [Tanh](#tanh)
  - [Applications](#applications)
    - [Convnext](#convnext)
    - [Densenet](#densenet)
    - [Efficientnet](#efficientnet)
    - [Efficientnet V2](#efficientnet-v2)
    - [Imagenet Utils](#imagenet-utils)
    - [Inception Resnet V2](#inception-resnet-v2)
    - [Inception V3](#inception-v3)
    - [Mobilenet](#mobilenet)
    - [Mobilenet V2](#mobilenet-v2)
    - [Mobilenet V3](#mobilenet-v3)
    - [Nasnet](#nasnet)
    - [Regnet](#regnet)
    - [Resnet](#resnet)
    - [Resnet 50](#resnet-50)
    - [Resner Rs](#resner-rs)
    - [Resnet V2](#resnet-v2)
    - [Vgg 16](#vgg-16)
    - [Vgg 19](#vgg-19)
    - [Xception](#xception)
    - [ConvNeXtBase](#convnextbase)
    - [ConvNeXtLarge](#convnextlarge)
    - [ConvNeXtSmall](#convnextsmall)
    - [ConvNeXtTiny](#convnexttiny)
    - [ConvNeXtXLarge](#convnextxlarge)
    - [DenseNet121](#densenet121)
    - [DenseNet169](#densenet169)
    - [DenseNet201](#densenet201)
    - [EfficientNetB0](#efficientnetb0)
    - [EfficientNetB1](#efficientnetb1)
    - [EfficientNetB2](#efficientnetb2)
    - [EfficientNetB3](#efficientnetb3)
    - [EfficientNetB4](#efficientnetb4)
    - [EfficientNetB5](#efficientnetb5)
    - [EfficientNetB6](#efficientnetb6)
    - [EfficientNetB7](#efficientnetb7)
    - [EfficientNetV2B0](#efficientnetv2b0)
    - [EfficientNetV2B1](#efficientnetv2b1)
    - [EfficientNetV2B2](#efficientnetv2b2)
    - [EfficientNetV2B3](#efficientnetv2b3)
    - [EfficientNetV2L](#efficientnetv2l)
    - [EfficientNetV2M](#efficientnetv2m)
    - [EfficientNetV2S](#efficientnetv2s)
    - [Inception-ResNet v2](#inception-resnet-v2-1)
    - [Inception v3](#inception-v3-1)
    - [MobileNet](#mobilenet-1)
    - [MobileNetV2](#mobilenetv2)
    - [MobileNetV3Large](#mobilenetv3large)
    - [MobileNetV3Small](#mobilenetv3small)
    - [NASNetLarge](#nasnetlarge)
    - [NASNetMobile](#nasnetmobile)
    - [RegNetX002](#regnetx002)
    - [RegNetX004](#regnetx004)
    - [RegNetX006](#regnetx006)
    - [RegNetX008](#regnetx008)
    - [RegNetX016](#regnetx016)
    - [RegNetX032](#regnetx032)
    - [RegNetX040](#regnetx040)
    - [RegNetX064](#regnetx064)
    - [RegNetX080](#regnetx080)
    - [RegNetX120](#regnetx120)
    - [RegNetX160](#regnetx160)
    - [RegNetX320](#regnetx320)
    - [RegNetY002](#regnety002)
    - [RegNetY004](#regnety004)
    - [RegNetY006](#regnety006)
    - [RegNetY008](#regnety008)
    - [RegNetY016](#regnety016)
    - [RegNetY032](#regnety032)
    - [RegNetY040](#regnety040)
    - [RegNetY064](#regnety064)
    - [RegNetY080](#regnety080)
    - [RegNetY120](#regnety120)
    - [RegNetY160](#regnety160)
    - [RegNetY320](#regnety320)
    - [ResNet101](#resnet101)
    - [ResNet101V2](#resnet101v2)
    - [ResNet152](#resnet152)
    - [ResNet152V2](#resnet152v2)
    - [ResNet50](#resnet50)
    - [ResNet50V2](#resnet50v2)
    - [ResNetRS101](#resnetrs101)
    - [ResNetRS152](#resnetrs152)
    - [ResNetRS200](#resnetrs200)
    - [ResNetRS270](#resnetrs270)
    - [ResNetRS350](#resnetrs350)
    - [ResNetRS420](#resnetrs420)
    - [ResNetRS50](#resnetrs50)
    - [VGG16](#vgg16)
    - [VGG19](#vgg19)
    - [Xception](#xception-1)
  - [Backend](#backend)
  - [Callbacks](#callbacks)
  - [Constraints](#constraints)
  - [Datasets](#datasets)
  - [dtensor](#dtensor)
  - [Estimator](#estimator)
  - [Experimental](#experimental)
  - [Export](#export)
  - [Initializers](#initializers)
  - [Layers](#layers)
  - [Losses](#losses)
  - [Metrics](#metrics)
  - [mixed\_precision](#mixed_precision)
  - [Models](#models)
  - [Optimizers](#optimizers)
  - [Preprocessing](#preprocessing)
  - [Regularizers](#regularizers)
  - [Saving](#saving)
  - [Utils](#utils)

## Activations

### Deserialize

### Elu

### Exponential

### Gelu

### Get

### Hard Sigmoid

### Linear

### Mish

### Relu

### Selu

### Serialize

### Sigmoid

### Softmax

### Softplus

### Softsign

### Swish

### Tanh

## Applications

### Convnext

### Densenet

### Efficientnet

### Efficientnet V2

### Imagenet Utils

### Inception Resnet V2

### Inception V3

### Mobilenet

### Mobilenet V2

### Mobilenet V3

### Nasnet

### Regnet

### Resnet

### Resnet 50

### Resner Rs

### Resnet V2

### Vgg 16

### Vgg 19

### Xception

### ConvNeXtBase

### ConvNeXtLarge

### ConvNeXtSmall

### ConvNeXtTiny

### ConvNeXtXLarge

### DenseNet121

### DenseNet169

### DenseNet201

### EfficientNetB0

### EfficientNetB1

### EfficientNetB2

### EfficientNetB3

### EfficientNetB4

### EfficientNetB5

### EfficientNetB6

### EfficientNetB7

### EfficientNetV2B0

### EfficientNetV2B1

### EfficientNetV2B2

### EfficientNetV2B3

### EfficientNetV2L

### EfficientNetV2M

### EfficientNetV2S

### Inception-ResNet v2

### Inception v3

### MobileNet

### MobileNetV2

### MobileNetV3Large

### MobileNetV3Small

### NASNetLarge

### NASNetMobile

### RegNetX002

### RegNetX004

### RegNetX006

### RegNetX008

### RegNetX016

### RegNetX032

### RegNetX040

### RegNetX064

### RegNetX080

### RegNetX120

### RegNetX160

### RegNetX320

### RegNetY002

### RegNetY004

### RegNetY006

### RegNetY008

### RegNetY016

### RegNetY032

### RegNetY040

### RegNetY064

### RegNetY080

### RegNetY120

### RegNetY160

### RegNetY320

### ResNet101

### ResNet101V2

### ResNet152

### ResNet152V2

### ResNet50

### ResNet50V2

### ResNetRS101

### ResNetRS152

### ResNetRS200

### ResNetRS270

### ResNetRS350

### ResNetRS420

### ResNetRS50

### VGG16

### VGG19

### Xception

## Backend

## Callbacks

## Constraints

## Datasets

## dtensor

## Estimator

## Experimental

## Export

## Initializers

## Layers

## Losses

## Metrics

## mixed_precision

## Models

## Optimizers

## Preprocessing

## Regularizers

## Saving

## Utils
