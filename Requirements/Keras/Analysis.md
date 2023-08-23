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
    - [clear\_session](#clear_session)
    - [epsilon](#epsilon)
    - [floatx](#floatx)
    - [get\_uid](#get_uid)
    - [image\_data\_format](#image_data_format)
    - [is\_keras\_tensor](#is_keras_tensor)
    - [reset\_uids](#reset_uids)
    - [rnn](#rnn)
    - [set\_epsilon](#set_epsilon)
    - [set\_floatx](#set_floatx)
    - [set\_image\_data\_format](#set_image_data_format)
  - [Callbacks](#callbacks)
    - [BackupAndRestore](#backupandrestore)
    - [BaseLogger](#baselogger)
    - [CSVLogger](#csvlogger)
    - [Callback](#callback)
    - [CallbackList](#callbacklist)
    - [EarlyStopping](#earlystopping)
    - [History](#history)
    - [LambdaCallback](#lambdacallback)
    - [LearningRateScheduler](#learningratescheduler)
    - [ModelCheckpoint](#modelcheckpoint)
    - [ProgbarLogger](#progbarlogger)
    - [ReduceLROnPlateau](#reducelronplateau)
    - [RemoteMonitor](#remotemonitor)
    - [SidecarEvaluatorModelExport](#sidecarevaluatormodelexport)
    - [TensorBoard](#tensorboard)
    - [TerminateOnNaN](#terminateonnan)
  - [Constraints](#constraints)
    - [Constraint](#constraint)
    - [MaxNorm](#maxnorm)
    - [MinMaxNorm](#minmaxnorm)
    - [NonNeg](#nonneg)
    - [RadialConstraint](#radialconstraint)
    - [UnitNorm](#unitnorm)
    - [max\_norm](#max_norm)
    - [min\_max\_norm](#min_max_norm)
    - [non\_neg](#non_neg)
    - [radial\_constraint](#radial_constraint)
    - [unit\_norm](#unit_norm)
    - [deserialize](#deserialize-1)
    - [get](#get-1)
    - [serialize](#serialize-1)
  - [Datasets](#datasets)
    - [boston\_housing](#boston_housing)
    - [cifar10](#cifar10)
    - [cifar100](#cifar100)
    - [fashion\_mnist](#fashion_mnist)
    - [imdb](#imdb)
    - [mnist](#mnist)
    - [reuters](#reuters)
  - [dtensor](#dtensor)
  - [Estimator](#estimator)
    - [model\_to\_estimator](#model_to_estimator)
  - [Experimental](#experimental)
  - [Export](#export)
    - [ExportArchive](#exportarchive)
  - [Initializers](#initializers)
    - [Constant](#constant)
    - [GlorotNormal](#glorotnormal)
    - [GlorotUniform](#glorotuniform)
    - [HeNormal](#henormal)
    - [HeUniform](#heuniform)
    - [Identity](#identity)
    - [Initializer](#initializer)
    - [LecunNormal](#lecunnormal)
    - [LecunUniform](#lecununiform)
    - [Ones](#ones)
    - [Orthogonal](#orthogonal)
    - [RandomNormal](#randomnormal)
    - [RandomUniform](#randomuniform)
    - [TruncatedNormal](#truncatednormal)
    - [VarianceScaling](#variancescaling)
    - [Zeros](#zeros)
    - [constant](#constant-1)
    - [glorot\_normal](#glorot_normal)
    - [glorot\_uniform](#glorot_uniform)
    - [he\_normal](#he_normal)
    - [he\_uniform](#he_uniform)
    - [identity](#identity-1)
    - [lecun\_normal](#lecun_normal)
    - [lecun\_uniform](#lecun_uniform)
    - [ones](#ones-1)
    - [orthogonal](#orthogonal-1)
    - [random\_normal](#random_normal)
    - [random\_uniform](#random_uniform)
    - [truncated\_normal](#truncated_normal)
    - [variance\_scaling](#variance_scaling)
    - [zeros](#zeros-1)
    - [deserialize](#deserialize-2)
    - [get](#get-2)
    - [serialize](#serialize-2)
  - [Layers](#layers)
    - [AbstractRNNCell](#abstractrnncell)
    - [Activation](#activation)
    - [ActivityRegularization](#activityregularization)
    - [Add](#add)
    - [AdditiveAttention](#additiveattention)
    - [AlphaDropout](#alphadropout)
    - [Attention](#attention)
    - [Average](#average)
    - [AveragePooling1D](#averagepooling1d)
    - [AveragePooling2D](#averagepooling2d)
    - [AveragePooling3D](#averagepooling3d)
    - [AvgPool1D](#avgpool1d)
    - [AvgPool2D](#avgpool2d)
    - [AvgPool3D](#avgpool3d)
    - [BatchNormalization](#batchnormalization)
    - [Bidirectional](#bidirectional)
    - [CategoryEncoding](#categoryencoding)
    - [CenterCrop](#centercrop)
    - [Concatenate](#concatenate)
    - [Conv1D](#conv1d)
    - [Conv1DTranspose](#conv1dtranspose)
    - [Conv2D](#conv2d)
    - [Conv2DTranspose](#conv2dtranspose)
    - [Conv3D](#conv3d)
    - [Conv3DTranspose](#conv3dtranspose)
    - [ConvLSTM1D](#convlstm1d)
    - [ConvLSTM2D](#convlstm2d)
    - [ConvLSTM3D](#convlstm3d)
    - [Convolution1D](#convolution1d)
    - [Convolution1DTranspose](#convolution1dtranspose)
    - [Convolution2D](#convolution2d)
    - [Convolution2DTranspose](#convolution2dtranspose)
    - [Convolution3D](#convolution3d)
    - [Convolution3DTranspose](#convolution3dtranspose)
    - [Cropping1D](#cropping1d)
    - [Cropping2D](#cropping2d)
    - [Cropping3D](#cropping3d)
    - [Dense](#dense)
    - [DenseFeatures](#densefeatures)
    - [DepthwiseConv1D](#depthwiseconv1d)
    - [DepthwiseConv2D](#depthwiseconv2d)
    - [Discretization](#discretization)
    - [Dot](#dot)
    - [Dropout](#dropout)
    - [ELU](#elu-1)
    - [EinsumDense](#einsumdense)
    - [Embedding](#embedding)
    - [Flatten](#flatten)
    - [GRU](#gru)
    - [GRUCell](#grucell)
    - [GaussianDropout](#gaussiandropout)
    - [GaussianNoise](#gaussiannoise)
    - [GlobalAveragePooling1D](#globalaveragepooling1d)
    - [GlobalAveragePooling2D](#globalaveragepooling2d)
    - [GlobalAveragePooling3D](#globalaveragepooling3d)
    - [GlobalAvgPool1D](#globalavgpool1d)
    - [GlobalAvgPool2D](#globalavgpool2d)
    - [GlobalAvgPool3D](#globalavgpool3d)
    - [GlobalMaxPool1D](#globalmaxpool1d)
    - [GlobalMaxPool2D](#globalmaxpool2d)
    - [GlobalMaxPool3D](#globalmaxpool3d)
    - [GlobalMaxPooling1D](#globalmaxpooling1d)
    - [GlobalMaxPooling2D](#globalmaxpooling2d)
    - [GlobalMaxPooling3D](#globalmaxpooling3d)
    - [GroupNormalization](#groupnormalization)
    - [HashedCrossing](#hashedcrossing)
    - [Hashing](#hashing)
    - [Identity](#identity-2)
    - [InputLayer](#inputlayer)
    - [InputSpec](#inputspec)
    - [IntegerLookup](#integerlookup)
    - [LSTM](#lstm)
    - [LSTMCell](#lstmcell)
    - [Lambda](#lambda)
    - [Layer](#layer)
    - [LayerNormalization](#layernormalization)
    - [LeakyReLU](#leakyrelu)
    - [LocallyConnected1D](#locallyconnected1d)
    - [LocallyConnected2D](#locallyconnected2d)
    - [Masking](#masking)
    - [MaxPool1D](#maxpool1d)
    - [MaxPool2D](#maxpool2d)
    - [MaxPool3D](#maxpool3d)
    - [MaxPooling1D](#maxpooling1d)
    - [MaxPooling2D](#maxpooling2d)
    - [MaxPooling3D](#maxpooling3d)
    - [Maximum](#maximum)
    - [Minimum](#minimum)
    - [MultiHeadAttention](#multiheadattention)
    - [Multiply](#multiply)
    - [Normalization](#normalization)
    - [PReLU](#prelu)
    - [Permute](#permute)
    - [RNN](#rnn-1)
    - [RandomBrightness](#randombrightness)
    - [RandomContrast](#randomcontrast)
    - [RandomCrop](#randomcrop)
    - [RandomFlip](#randomflip)
    - [RandomHeight](#randomheight)
    - [RandomRotation](#randomrotation)
    - [RandomTranslation](#randomtranslation)
    - [RandomWidth](#randomwidth)
    - [RandomZoom](#randomzoom)
    - [ReLU](#relu-1)
    - [RepeatVector](#repeatvector)
    - [Rescaling](#rescaling)
    - [Reshape](#reshape)
    - [Resizing](#resizing)
    - [SeparableConv1D](#separableconv1d)
    - [SeparableConv2D](#separableconv2d)
    - [SeparableConvolution1D](#separableconvolution1d)
    - [SeparableConvolution2D](#separableconvolution2d)
    - [SimpleRNN](#simplernn)
    - [SimpleRNNCell](#simplernncell)
    - [Softmax](#softmax-1)
    - [SpatialDropout1D](#spatialdropout1d)
    - [SpatialDropout2D](#spatialdropout2d)
    - [SpatialDropout3D](#spatialdropout3d)
    - [SpectralNormalization](#spectralnormalization)
    - [StackedRNNCells](#stackedrnncells)
    - [StringLookup](#stringlookup)
    - [Subtract](#subtract)
    - [TextVectorization](#textvectorization)
    - [ThresholdedReLU](#thresholdedrelu)
    - [TimeDistributed](#timedistributed)
    - [UnitNormalization](#unitnormalization)
    - [UpSampling1D](#upsampling1d)
    - [UpSampling2D](#upsampling2d)
    - [UpSampling3D](#upsampling3d)
    - [Wrapper](#wrapper)
    - [ZeroPadding1D](#zeropadding1d)
    - [ZeroPadding2D](#zeropadding2d)
    - [ZeroPadding3D](#zeropadding3d)
    - [Input](#input)
    - [add](#add-1)
    - [average](#average-1)
    - [concatenate](#concatenate-1)
    - [deserialize](#deserialize-3)
    - [dot](#dot-1)
    - [maximum](#maximum-1)
    - [minimum](#minimum-1)
    - [multiply](#multiply-1)
    - [serialize](#serialize-3)
    - [subtract](#subtract-1)
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

### clear_session

### epsilon

### floatx

### get_uid

### image_data_format

### is_keras_tensor

### reset_uids

### rnn

### set_epsilon

### set_floatx

### set_image_data_format

## Callbacks

### BackupAndRestore

### BaseLogger

### CSVLogger

### Callback

### CallbackList

### EarlyStopping

### History

### LambdaCallback

### LearningRateScheduler

### ModelCheckpoint

### ProgbarLogger

### ReduceLROnPlateau

### RemoteMonitor

### SidecarEvaluatorModelExport

### TensorBoard

### TerminateOnNaN

## Constraints

### Constraint

### MaxNorm

### MinMaxNorm

### NonNeg

### RadialConstraint

### UnitNorm

### max_norm

### min_max_norm

### non_neg

### radial_constraint

### unit_norm

### deserialize

### get

### serialize

## Datasets

### boston_housing

### cifar10

### cifar100

### fashion_mnist

### imdb

### mnist

### reuters

## dtensor

> Nothing found

## Estimator

### model_to_estimator

## Experimental

> Nothing found

## Export

### ExportArchive

## Initializers

### Constant

### GlorotNormal

### GlorotUniform

### HeNormal

### HeUniform

### Identity

### Initializer

### LecunNormal

### LecunUniform

### Ones

### Orthogonal

### RandomNormal

### RandomUniform

### TruncatedNormal

### VarianceScaling

### Zeros

### constant

### glorot_normal

### glorot_uniform

### he_normal

### he_uniform

### identity

### lecun_normal

### lecun_uniform

### ones

### orthogonal

### random_normal

### random_uniform

### truncated_normal

### variance_scaling

### zeros

### deserialize

### get

### serialize

## Layers

### AbstractRNNCell

### Activation

### ActivityRegularization

### Add

### AdditiveAttention

### AlphaDropout

### Attention

### Average

### AveragePooling1D

### AveragePooling2D

### AveragePooling3D

### AvgPool1D

### AvgPool2D

### AvgPool3D

### BatchNormalization

### Bidirectional

### CategoryEncoding

### CenterCrop

### Concatenate

### Conv1D

### Conv1DTranspose

### Conv2D

### Conv2DTranspose

### Conv3D

### Conv3DTranspose

### ConvLSTM1D

### ConvLSTM2D

### ConvLSTM3D

### Convolution1D

### Convolution1DTranspose

### Convolution2D

### Convolution2DTranspose

### Convolution3D

### Convolution3DTranspose

### Cropping1D

### Cropping2D

### Cropping3D

### Dense

### DenseFeatures

### DepthwiseConv1D

### DepthwiseConv2D

### Discretization

### Dot

### Dropout

### ELU

### EinsumDense

### Embedding

### Flatten

### GRU

### GRUCell

### GaussianDropout

### GaussianNoise

### GlobalAveragePooling1D

### GlobalAveragePooling2D

### GlobalAveragePooling3D

### GlobalAvgPool1D

### GlobalAvgPool2D

### GlobalAvgPool3D

### GlobalMaxPool1D

### GlobalMaxPool2D

### GlobalMaxPool3D

### GlobalMaxPooling1D

### GlobalMaxPooling2D

### GlobalMaxPooling3D

### GroupNormalization

### HashedCrossing

### Hashing

### Identity

### InputLayer

### InputSpec

### IntegerLookup

### LSTM

### LSTMCell

### Lambda

### Layer

### LayerNormalization

### LeakyReLU

### LocallyConnected1D

### LocallyConnected2D

### Masking

### MaxPool1D

### MaxPool2D

### MaxPool3D

### MaxPooling1D

### MaxPooling2D

### MaxPooling3D

### Maximum

### Minimum

### MultiHeadAttention

### Multiply

### Normalization

### PReLU

### Permute

### RNN

### RandomBrightness

### RandomContrast

### RandomCrop

### RandomFlip

### RandomHeight

### RandomRotation

### RandomTranslation

### RandomWidth

### RandomZoom

### ReLU

### RepeatVector

### Rescaling

### Reshape

### Resizing

### SeparableConv1D

### SeparableConv2D

### SeparableConvolution1D

### SeparableConvolution2D

### SimpleRNN

### SimpleRNNCell

### Softmax

### SpatialDropout1D

### SpatialDropout2D

### SpatialDropout3D

### SpectralNormalization

### StackedRNNCells

### StringLookup

### Subtract

### TextVectorization

### ThresholdedReLU

### TimeDistributed

### UnitNormalization

### UpSampling1D

### UpSampling2D

### UpSampling3D

### Wrapper

### ZeroPadding1D

### ZeroPadding2D

### ZeroPadding3D

### Input

### add

### average

### concatenate

### deserialize

### dot

### maximum

### minimum

### multiply

### serialize

### subtract

## Losses

## Metrics

## mixed_precision

## Models

## Optimizers

## Preprocessing

## Regularizers

## Saving

## Utils
