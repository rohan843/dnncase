# Keras

## Contents

- [Keras](#keras)
  - [Contents](#contents)
  - [Input](#input)
  - [Model](#model)
  - [Sequential](#sequential)
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
    - [Input](#input-1)
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
    - [BinaryCrossentropy](#binarycrossentropy)
    - [BinaryFocalCrossentropy](#binaryfocalcrossentropy)
    - [CategoricalCrossentropy](#categoricalcrossentropy)
    - [CategoricalFocalCrossentropy](#categoricalfocalcrossentropy)
    - [CategoricalHinge](#categoricalhinge)
    - [CosineSimilarity](#cosinesimilarity)
    - [Hinge](#hinge)
    - [Huber](#huber)
    - [KLDivergence](#kldivergence)
    - [LogCosh](#logcosh)
    - [Loss](#loss)
    - [MeanAbsoluteError](#meanabsoluteerror)
    - [MeanAbsolutePercentageError](#meanabsolutepercentageerror)
    - [MeanSquaredError](#meansquarederror)
    - [MeanSquaredLogarithmicError](#meansquaredlogarithmicerror)
    - [Poisson](#poisson)
    - [Reduction](#reduction)
    - [SparseCategoricalCrossentropy](#sparsecategoricalcrossentropy)
    - [SquaredHinge](#squaredhinge)
    - [KLD](#kld)
    - [MAE](#mae)
    - [MAPE](#mape)
    - [MSE](#mse)
    - [MSLE](#msle)
    - [binary\_crossentropy](#binary_crossentropy)
    - [binary\_focal\_crossentropy](#binary_focal_crossentropy)
    - [categorical\_crossentropy](#categorical_crossentropy)
    - [categorical\_focal\_crossentropy](#categorical_focal_crossentropy)
    - [categorical\_hinge](#categorical_hinge)
    - [cosine\_similarity](#cosine_similarity)
    - [deserialize](#deserialize-4)
    - [get](#get-3)
    - [hinge](#hinge-1)
    - [huber](#huber-1)
    - [kl\_divergence](#kl_divergence)
    - [kld](#kld-1)
    - [kullback\_leibler\_divergence](#kullback_leibler_divergence)
    - [log\_cosh](#log_cosh)
    - [logcosh](#logcosh-1)
    - [mae](#mae-1)
    - [mape](#mape-1)
    - [mean\_absolute\_error](#mean_absolute_error)
    - [mean\_absolute\_percentage\_error](#mean_absolute_percentage_error)
    - [mean\_squared\_error](#mean_squared_error)
    - [mean\_squared\_logarithmic\_error](#mean_squared_logarithmic_error)
    - [mse](#mse-1)
    - [msle](#msle-1)
    - [poisson](#poisson-1)
    - [serialize](#serialize-4)
    - [sparse\_categorical\_crossentropy](#sparse_categorical_crossentropy)
    - [squared\_hinge](#squared_hinge)
  - [Metrics](#metrics)
    - [AUC](#auc)
    - [Accuracy](#accuracy)
    - [BinaryAccuracy](#binaryaccuracy)
    - [BinaryCrossentropy](#binarycrossentropy-1)
    - [BinaryIoU](#binaryiou)
    - [CategoricalAccuracy](#categoricalaccuracy)
    - [CategoricalCrossentropy](#categoricalcrossentropy-1)
    - [CategoricalHinge](#categoricalhinge-1)
    - [CosineSimilarity](#cosinesimilarity-1)
    - [F1Score](#f1score)
    - [FBetaScore](#fbetascore)
    - [FalseNegatives](#falsenegatives)
    - [FalsePositives](#falsepositives)
    - [Hinge](#hinge-2)
    - [IoU](#iou)
    - [KLDivergence](#kldivergence-1)
    - [LogCoshError](#logcosherror)
    - [Mean](#mean)
    - [MeanAbsoluteError](#meanabsoluteerror-1)
    - [MeanAbsolutePercentageError](#meanabsolutepercentageerror-1)
    - [MeanIoU](#meaniou)
    - [MeanMetricWrapper](#meanmetricwrapper)
    - [MeanRelativeError](#meanrelativeerror)
    - [MeanSquaredError](#meansquarederror-1)
    - [MeanSquaredLogarithmicError](#meansquaredlogarithmicerror-1)
    - [MeanTensor](#meantensor)
    - [Metric](#metric)
    - [OneHotIoU](#onehotiou)
    - [OneHotMeanIoU](#onehotmeaniou)
    - [Poisson](#poisson-2)
    - [Precision](#precision)
    - [PrecisionAtRecall](#precisionatrecall)
    - [R2Score](#r2score)
    - [Recall](#recall)
    - [RecallAtPrecision](#recallatprecision)
    - [RootMeanSquaredError](#rootmeansquarederror)
    - [SensitivityAtSpecificity](#sensitivityatspecificity)
    - [SparseCategoricalAccuracy](#sparsecategoricalaccuracy)
    - [SparseCategoricalCrossentropy](#sparsecategoricalcrossentropy-1)
    - [SparseTopKCategoricalAccuracy](#sparsetopkcategoricalaccuracy)
    - [SpecificityAtSensitivity](#specificityatsensitivity)
    - [SquaredHinge](#squaredhinge-1)
    - [Sum](#sum)
    - [TopKCategoricalAccuracy](#topkcategoricalaccuracy)
    - [TrueNegatives](#truenegatives)
    - [TruePositives](#truepositives)
    - [KLD](#kld-2)
    - [MAE](#mae-2)
    - [MAPE](#mape-2)
    - [MSE](#mse-2)
    - [MSLE](#msle-2)
    - [binary\_accuracy](#binary_accuracy)
    - [binary\_crossentropy](#binary_crossentropy-1)
    - [binary\_focal\_crossentropy](#binary_focal_crossentropy-1)
    - [categorical\_accuracy](#categorical_accuracy)
    - [categorical\_crossentropy](#categorical_crossentropy-1)
    - [categorical\_focal\_crossentropy](#categorical_focal_crossentropy-1)
    - [deserialize](#deserialize-5)
    - [get](#get-4)
    - [hinge](#hinge-3)
    - [kl\_divergence](#kl_divergence-1)
    - [kld](#kld-3)
    - [kullback\_leibler\_divergence](#kullback_leibler_divergence-1)
    - [log\_cosh](#log_cosh-1)
    - [logcosh](#logcosh-2)
    - [mae](#mae-3)
    - [mape](#mape-3)
    - [mean\_absolute\_error](#mean_absolute_error-1)
    - [mean\_absolute\_percentage\_error](#mean_absolute_percentage_error-1)
    - [mean\_squared\_error](#mean_squared_error-1)
    - [mean\_squared\_logarithmic\_error](#mean_squared_logarithmic_error-1)
    - [mse](#mse-3)
    - [msle](#msle-3)
    - [poisson](#poisson-3)
    - [serialize](#serialize-5)
    - [sparse\_categorical\_accuracy](#sparse_categorical_accuracy)
    - [sparse\_categorical\_crossentropy](#sparse_categorical_crossentropy-1)
    - [sparse\_top\_k\_categorical\_accuracy](#sparse_top_k_categorical_accuracy)
    - [squared\_hinge](#squared_hinge-1)
    - [top\_k\_categorical\_accuracy](#top_k_categorical_accuracy)
  - [mixed\_precision](#mixed_precision)
    - [LossScaleOptimizer](#lossscaleoptimizer)
    - [Policy](#policy)
    - [global\_policy](#global_policy)
    - [set\_global\_policy](#set_global_policy)
  - [Models](#models)
    - [clone\_model](#clone_model)
    - [load\_model](#load_model)
    - [model\_from\_config](#model_from_config)
    - [model\_from\_json](#model_from_json)
    - [model\_from\_yaml](#model_from_yaml)
    - [save\_model](#save_model)
  - [Optimizers](#optimizers)
    - [legacy](#legacy)
    - [schedules](#schedules)
    - [Adadelta](#adadelta)
    - [Adafactor](#adafactor)
    - [Adagrad](#adagrad)
    - [Adam](#adam)
    - [AdamW](#adamw)
    - [Adamax](#adamax)
    - [Ftrl](#ftrl)
    - [Lion](#lion)
    - [Nadam](#nadam)
    - [Optimizer](#optimizer)
    - [RMSprop](#rmsprop)
    - [SGD](#sgd)
    - [deserialize](#deserialize-6)
    - [get](#get-5)
    - [serialize](#serialize-6)
  - [Preprocessing](#preprocessing)
  - [Regularizers](#regularizers)
    - [L1](#l1)
    - [L1L2](#l1l2)
    - [L2](#l2)
    - [OrthogonalRegularizer](#orthogonalregularizer)
    - [Regularizer](#regularizer)
    - [l1](#l1-1)
    - [l2](#l2-1)
    - [orthogonal\_regularizer](#orthogonal_regularizer)
    - [deserialize](#deserialize-7)
    - [get](#get-6)
    - [l1\_l2](#l1_l2)
    - [serialize](#serialize-7)
  - [Saving](#saving)
    - [custom\_object\_scope](#custom_object_scope)
    - [deserialize\_keras\_object](#deserialize_keras_object)
    - [get\_custom\_objects](#get_custom_objects)
    - [get\_registered\_name](#get_registered_name)
    - [get\_registered\_object](#get_registered_object)
    - [load\_model](#load_model-1)
    - [register\_keras\_serializable](#register_keras_serializable)
    - [save\_model](#save_model-1)
    - [serialize\_keras\_object](#serialize_keras_object)
  - [Utils](#utils)
    - [legacy](#legacy-1)
    - [CustomObjectScope](#customobjectscope)
    - [FeatureSpace](#featurespace)
    - [GeneratorEnqueuer](#generatorenqueuer)
    - [OrderedEnqueuer](#orderedenqueuer)
    - [Progbar](#progbar)
    - [Sequence](#sequence)
    - [SequenceEnqueuer](#sequenceenqueuer)
    - [SidecarEvaluator](#sidecarevaluator)
    - [TimedThread](#timedthread)
    - [custom\_object\_scope](#custom_object_scope-1)
    - [array\_to\_img](#array_to_img)
    - [audio\_dataset\_from\_directory](#audio_dataset_from_directory)
    - [deserialize\_keras\_object](#deserialize_keras_object-1)
    - [disable\_interactive\_logging](#disable_interactive_logging)
    - [enable\_interactive\_logging](#enable_interactive_logging)
    - [get\_custom\_objects](#get_custom_objects-1)
    - [get\_file](#get_file)
    - [get\_registered\_name](#get_registered_name-1)
    - [get\_registered\_object](#get_registered_object-1)
    - [get\_source\_inputs](#get_source_inputs)
    - [image\_dataset\_from\_directory](#image_dataset_from_directory)
    - [img\_to\_array](#img_to_array)
    - [is\_interactive\_logging\_enabled](#is_interactive_logging_enabled)
    - [load\_img](#load_img)
    - [model\_to\_dot](#model_to_dot)
    - [normalize](#normalize)
    - [pack\_x\_y\_sample\_weight](#pack_x_y_sample_weight)
    - [pad\_sequences](#pad_sequences)
    - [plot\_model](#plot_model)
    - [register\_keras\_serializable](#register_keras_serializable-1)
    - [save\_img](#save_img)
    - [serialize\_keras\_object](#serialize_keras_object-1)
    - [set\_random\_seed](#set_random_seed)
    - [split\_dataset](#split_dataset)
    - [text\_dataset\_from\_directory](#text_dataset_from_directory)
    - [timeseries\_dataset\_from\_array](#timeseries_dataset_from_array)
    - [to\_categorical](#to_categorical)
    - [to\_ordinal](#to_ordinal)
    - [unpack\_x\_y\_sample\_weight](#unpack_x_y_sample_weight)
    - [warmstart\_embedding\_matrix](#warmstart_embedding_matrix)

## Input

> This is a `function`.

**Name**: tf.keras.Input

**Parameters**:

| name       | input dtype/shape                              | use |
| ---------- | ---------------------------------------------- | --- |
| shape      | tuple (integers), not including the batch size | req |
| batch_size | integer                                        | opt |
| name       | string                                         | opt |
| dtype      | data type object                               | opt |
| sparse     | boolean                                        | opt |
| tensor     | tensor                                         | opt |
| ragged     | boolean                                        | opt |
| type_spec  | tf.TypeSpec                                    | opt |

**Extra Notes:**

1. Used to instantiate a Keras tensor.

## Model

**Name**: tf.keras.Model

**Hyperparameters**:

| name    | input dtype/shape                                   | use |
| ------- | --------------------------------------------------- | --- |
| inputs  | keras.Input _or_ dict, list or tuple of keras.Input | req |
| outputs | tensor                                              | req |
| name    | String                                              | opt |

**Extra Notes:**

1. Only dicts, lists, and tuples of input tensors are supported. Nested inputs are not supported (e.g. lists of list or dicts of dict).
2. **IMP**: The `run_eagerly` doesn't seem useful _ensure_ it is `False`. (It is `False` by default.)

## Sequential



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

### BinaryCrossentropy

### BinaryFocalCrossentropy

### CategoricalCrossentropy

### CategoricalFocalCrossentropy

### CategoricalHinge

### CosineSimilarity

### Hinge

### Huber

### KLDivergence

### LogCosh

### Loss

### MeanAbsoluteError

### MeanAbsolutePercentageError

### MeanSquaredError

### MeanSquaredLogarithmicError

### Poisson

### Reduction

### SparseCategoricalCrossentropy

### SquaredHinge

### KLD

### MAE

### MAPE

### MSE

### MSLE

### binary_crossentropy

### binary_focal_crossentropy

### categorical_crossentropy

### categorical_focal_crossentropy

### categorical_hinge

### cosine_similarity

### deserialize

### get

### hinge

### huber

### kl_divergence

### kld

### kullback_leibler_divergence

### log_cosh

### logcosh

### mae

### mape

### mean_absolute_error

### mean_absolute_percentage_error

### mean_squared_error

### mean_squared_logarithmic_error

### mse

### msle

### poisson

### serialize

### sparse_categorical_crossentropy

### squared_hinge

## Metrics

### AUC

### Accuracy

### BinaryAccuracy

### BinaryCrossentropy

### BinaryIoU

### CategoricalAccuracy

### CategoricalCrossentropy

### CategoricalHinge

### CosineSimilarity

### F1Score

### FBetaScore

### FalseNegatives

### FalsePositives

### Hinge

### IoU

### KLDivergence

### LogCoshError

### Mean

### MeanAbsoluteError

### MeanAbsolutePercentageError

### MeanIoU

### MeanMetricWrapper

### MeanRelativeError

### MeanSquaredError

### MeanSquaredLogarithmicError

### MeanTensor

### Metric

### OneHotIoU

### OneHotMeanIoU

### Poisson

### Precision

### PrecisionAtRecall

### R2Score

### Recall

### RecallAtPrecision

### RootMeanSquaredError

### SensitivityAtSpecificity

### SparseCategoricalAccuracy

### SparseCategoricalCrossentropy

### SparseTopKCategoricalAccuracy

### SpecificityAtSensitivity

### SquaredHinge

### Sum

### TopKCategoricalAccuracy

### TrueNegatives

### TruePositives

### KLD

### MAE

### MAPE

### MSE

### MSLE

### binary_accuracy

### binary_crossentropy

### binary_focal_crossentropy

### categorical_accuracy

### categorical_crossentropy

### categorical_focal_crossentropy

### deserialize

### get

### hinge

### kl_divergence

### kld

### kullback_leibler_divergence

### log_cosh

### logcosh

### mae

### mape

### mean_absolute_error

### mean_absolute_percentage_error

### mean_squared_error

### mean_squared_logarithmic_error

### mse

### msle

### poisson

### serialize

### sparse_categorical_accuracy

### sparse_categorical_crossentropy

### sparse_top_k_categorical_accuracy

### squared_hinge

### top_k_categorical_accuracy

## mixed_precision

### LossScaleOptimizer

### Policy

### global_policy

### set_global_policy

## Models

### clone_model

### load_model

### model_from_config

### model_from_json

### model_from_yaml

### save_model

## Optimizers

### legacy

### schedules

### Adadelta

### Adafactor

### Adagrad

### Adam

### AdamW

### Adamax

### Ftrl

### Lion

### Nadam

### Optimizer

### RMSprop

### SGD

### deserialize

### get

### serialize

## Preprocessing

> Depreciated

## Regularizers

### L1

### L1L2

### L2

### OrthogonalRegularizer

### Regularizer

### l1

### l2

### orthogonal_regularizer

### deserialize

### get

### l1_l2

### serialize

## Saving

### custom_object_scope

### deserialize_keras_object

### get_custom_objects

### get_registered_name

### get_registered_object

### load_model

### register_keras_serializable

### save_model

### serialize_keras_object

## Utils

### legacy

### CustomObjectScope

### FeatureSpace

### GeneratorEnqueuer

### OrderedEnqueuer

### Progbar

### Sequence

### SequenceEnqueuer

### SidecarEvaluator

### TimedThread

### custom_object_scope

### array_to_img

### audio_dataset_from_directory

### deserialize_keras_object

### disable_interactive_logging

### enable_interactive_logging

### get_custom_objects

### get_file

### get_registered_name

### get_registered_object

### get_source_inputs

### image_dataset_from_directory

### img_to_array

### is_interactive_logging_enabled

### load_img

### model_to_dot

### normalize

### pack_x_y_sample_weight

### pad_sequences

### plot_model

### register_keras_serializable

### save_img

### serialize_keras_object

### set_random_seed

### split_dataset

### text_dataset_from_directory

### timeseries_dataset_from_array

### to_categorical

### to_ordinal

### unpack_x_y_sample_weight

### warmstart_embedding_matrix
