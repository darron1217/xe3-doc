# 스킨 개발/제작
## 개요

이 문서는 스킨 생성 커맨드를 사용한 보편적인 방법의 스킨 제작 방법을 설명합니다.

## 스킨 타겟

스킨은 항상 그 스킨이 사용되는 대상\(타겟\)이 있습니다. 예를 들어 게시판 스킨은 게시판이 대상이 되며, 회원 프로필 스킨은 회원 프로필 컨트롤러가 대상이 됩니다. 또 특정 위젯이 대상이 될 수도 있습니다. 게시판, 회원 프로필 컨트롤러, 위젯과 같이 스킨이 적용되는 대상을 '스킨 타겟'이라고 합니다. 모든 스킨은 스킨 타겟을 반드시 지정해야 합니다.

XE의 구성요소중 HTML을 출력하는 모든 구성요소는 스킨 타겟이 될 수 있습니다. 스킨 타겟은 HTML을 출력할 때, 스킨 시스템이 적용될 수 있도록 구현되어야 하며, 스킨 타겟 아이디를 지정해 주어야 합니다.

## 빈 스킨생성 (터미널 환경)


스킨 생성 커맨드를 사용하려면 우선 스킨이 소속될 플러그인이 마련되어 있어야 합니다. 아직 플러그인이 준비되지 않았다면, [플러그인 개발 시작하기](../d50c-b7ec-adf8-c778/plugin-generation.md) 문서를 참고하여 플러그인을 생성하길 바랍니다. 또, 스킨 타겟의 아이디를 미리 알고 있어야 합니다.

소속될 플러그인과 스킨 타겟 아이디가 준비되었다면 아래 커맨드를 사용하여 빈 스킨을 생성합니다.

```php
$ php artisan make:skin <plugin> <name> <target>
```

`plugin`는 스킨 소속될 플러그인입니다. 플러그인이 위치한 디렉토리 이름을 입력해줍니다.

`name`에는 스킨의 제목을 지정해 주십시오. 지정한 스킨 제목은 스킨 선택시 스킨의 이름으로 표시됩니다.

`target`는 스킨 타겟 아이디를 지정해주십시오.

만약 `my_plugin` 플러그인\([플러그인 개발 시작하기](../d50c-b7ec-adf8-c778/plugin-generation.md)의 예제를 그대로 사용합니다.\)에 스킨을 넣고, 스킨 이름을 `나만의 프로필 스킨`으로 지정하고 싶다면, 아래와 같이 커맨드를 실행하시면 됩니다. 커맨드를 실행하면 생성되는 스킨의 개략적인 정보를 터미널에서 볼 수 있습니다. 회원 프로필 컨트롤러의 스킨 타겟 아이디는 `member/profile`입니다.

```
$ php artisan make:skin my_plugin Profile member/profile

[New skin info]
  plugin:        my_plugin
  path:          src/Skins/Profile
  class file:    src/Skins/Profile/ProfileSkin.php
  class name:    GilDongHong\XePlugin\MyPlugin\Skins\Profile\ProfileSkin
  id:            member/profile/skin/my_plugin@profile
  title:         Profile Skin
  description:   The Skin supported by My_plugin plugin.

 Do you want to add skin? [yes|no]:
 > yes

Generating autoload files
Skin is created successfully.
```


## 빈 스킨생성

![&#xC608;&#xC2DC;&#xB85C; &#xC0AC;&#xC6A9;&#xD55C; &#xD0C0;&#xAC9F; &#xB300;&#xC0C1;&#xC758; id&#xB294; &#xAC8C;&#xC2DC;&#xD310; &#xC2A4;&#xD0A8;&#xC774;&#xC5D0;&#xC694;. &#xB2E4;&#xB978; &#xC2A4;&#xD0A8;&#xC774; &#xBD99;&#xC744; &#xC218; &#xC788;&#xB294; &#xD50C;&#xB7EC;&#xADF8;&#xC778;&#xC5D0;&#xB3C4; &#xC774; &#xBC29;&#xC2DD;&#xC744; &#xC0AC;&#xC6A9;&#xD560; &#xC218; &#xC788;&#xC5B4;&#xC694;.](../.vuepress/assets/undefined%20%282%29.gif)


## 스킨 컴포넌트 아이디

스킨도 [컴포넌트](../xe/components.md)이므로 컴포넌트 아이디를 가지고 있어야 합니다. 스킨의 컴포넌트 아이디는 아래 규칙을 따라야 합니다.

```
<skin_target_id>/skin/<plugin_id>@<pure_id>
```

위의 예시에서 생성한 스킨의 아이디는 `member/profile/skin/my_plugin@profile`입니다.

## 스킨 등록

스킨 생성 커맨드를 사용할 경우, 자동으로 스킨을 등록해 줍니다. 플러그인의 `composer.json` 파일에 아래와 같이 컴포넌트 정보가 등록되어 있습니다.

```javascript
// plugins/my_plugin/composer.json
...
  "extra": {
        "xpressengine": {
            "title": "my plugin",
            "component": {
                "member/profile/skin/my_plugin@profile": {
                    "name": "Profile skin",
                    "description": "The skin supported by My_plugin plugin.",
                    "class": "GilDongHong\\XePlugin\\MyPlugin\\Skins\\Profile\\ProfileSkin"
                }
            }
        }
    }
```

`autoload` 항목을 생성하지 않아도 src폴더안에  skin이 배치되어있기 때문 플러그인에서 자동으로 class를 로드합니다.




### 스킨 디렉토리 구조

생성된 스킨은 아래의 디렉토리 구조를 가집니다. `plugins/my_plugin/src/Skins/{skinName}` 디렉토리는 스킨의 모든 파일이 담겨 있는 '스킨 디렉토리'입니다.

```
plugins/my_plugin/src/Skins
└── {skinName}/
    ├── assets/
    │   └── css/
    │       └── skin.css
    ├── views/
    │   └── index.blade.php
    ├── {skinName}Skin.php
    └── info.php
```

#### assets 파일

스킨에 필요한 `.js`나 `.css` 파일 그리고 이미지 파일과 같은 asset 파일을 담는 디렉토리입니다.

#### views 디렉토리

스킨을 출력할 때 사용하는 템플릿 파일들을 저장하는 디렉토리입니다. 템플릿 파일은 blade 템플릿 언어로 작성되어야 합니다. blade 템플릿 언어의 사용법은 [템플릿 문서](../develop-guide/template-blade.md)에 자세히 기술되어 있습니다.

#### Skin.php 파일

`Skin.php` 파일\(위의 예에서는 `ProfileSkin.php` 파일\)은 스킨클래스 파일입니다. 스킨 생성 커맨드로 생성된 스킨의 클래스는 `\Xpressengine\Skin\GenericSkin` 클래스를 상속받고 있습니다. 또, `GenericSkin` 클래스는 스킨 컴포넌트의 추상클래스인 `\Xpressengine\Skin\AbstractSkin`를 상속받고 있습니다.

```
\Xpressengine\Skin\AbstractSkin
└── \Xpressengine\Skin\GenericSkin
    └── Skin(Skin.php)
```

PHP 개발자가 아닌 스킨 제작자가 스킨 클래스를 직접 작성하는 것은 쉬운 일이 아닙니다. `GenericSkin` 클래스는 스킨 제작자들에게 규격화 된 스킨 구조를 제공함으로써 스킨 제작을 손쉽게 할 수 있도록 도와줍니다. `Skin.php` 파일은 처음 생성한 다음부터는 거의 직접 수정할 필요가 없습니다. `Skin.php`를 직접 수정하는 대신, `info.php`를 수정하십시오.

일반적으로 `Skin.php` 파일을 직접 수정하지 않아도 원하는 스킨을 제작하는 데에는 문제가 없습니다. 다만, 좀더 고수준의 스킨을 제작하고 싶거나, 특별한 기능을 스킨에 추가하고 싶다면 `Skin.php` 파일을 직접 수정하셔도 됩니다. `Skin.php` 파일을 수정하면 훨씬 자유롭고 편하게 스킨을 제작할 수 있습니다. 물론 그 전에 스킨 클래스의 각 메소드가 갖는 역할과 원리를 잘 이해하고 있어야 합니다.

#### info.php 파일

`info.php` 파일은 스킨의 구동에 필요한 여러가지 정보를 입력하는 파일입니다. 간단한 php 문법으로 쉽게 작성할 수 있습니다.

```php
<?php
return [
    'setting' => [
        'sample_text' => [
            '_type' => 'text',
            '_section' => '기본설정',
            'label' => '샘플 문구',
            'placeholder' => '샘플용 설정 필드입니다.',
            'description' => '샘플용 설정 필드입니다.',
        ],
    ],
    'support' => [
        'mobile' => true,
        'desktop' => true
    ]
];
```

`setting` 필드에는 스킨 설정 페이지에서 사용할 설정 항목에 대한 정보를 지정합니다.

`support` 필드에는 이 스킨이 데스크탑 버전과 모바일 버전을 지원하는지를 지정합니다.

## 스킨의 출력

하나의 스킨은 하나 이상의 페이지의 출력을 담당할 수 있습니다. 출력하는 페이지의 갯수는 스킨 타겟에 따라 다릅니다. 게시판의 경우, 글보기, 글쓰기, 글목록 등의 페이지를 가지고 있는데, 스킨은 게시판이 필요로 하는 모든 페이지의 출력을 담당합니다.
