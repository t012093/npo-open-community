# document-ui

[![MkDocs](https://img.shields.io/badge/MkDocs-Material-blue?style=flat-square)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-green?style=flat-square)](https://pages.github.com/)

`document-ui` は、MkDocs と Material for MkDocs テーマを使用した、シンプルで使いやすいドキュメント作成テンプレートです。このテンプレートを使えば、プロジェクトのドキュメントを素早く簡単に作成し、GitHub Pages で公開することができます。

## 特徴

*   **MkDocs と Material for MkDocs を採用:** 美しく、レスポンシブなドキュメントサイトを簡単に構築できます。
*   **GitHub Pages での公開を想定:** 作成したドキュメントは、GitHub Pages を使って簡単に公開できます。
*   **シンプルなディレクトリ構成:** ドキュメントの作成に集中できる、無駄のないディレクトリ構成になっています。
*   **カスタマイズ可能な環境変数:** プロジェクトに合わせて、サイト名、説明、リポジトリ URL などを簡単に設定できます。
*   **ドキュメント作成を効率化するテンプレート:**  基本的なセクションや記述例が用意されているため、ドキュメント作成の時間を短縮できます。

## 使い方

### サブモジュールとして他の GitHub リポジトリをドキュメントに含める方法

ドキュメント内で、他の GitHub リポジトリのコードを参照したり、リンクを貼ったりしたい場合、Git のサブモジュール機能を使うと便利です。以下は、`document-ui` テンプレートでサブモジュールを扱う方法です。

1.  **サブモジュールを追加する:**
    まず、ドキュメントのリポジトリにサブモジュールを追加します。`<サブモジュールのディレクトリ>`には、ドキュメント内で参照したいサブモジュールのリポジトリのパスを指定します。

    ```bash
    git submodule add <サブモジュールのリポジトリURL> <サブモジュールのディレクトリ>
    ```

    例:

    ```bash
    git submodule add https://github.com/example/example-repo.git docs/example-repo
    ```

2.  **`.gitmodules` ファイルをコミットする:**
    サブモジュールを追加すると、`.gitmodules` ファイルが作成されます。このファイルをコミットします。

    ```bash
    git add .gitmodules
    git commit -m "feat: サブモジュールを追加"
    ```

3.  **サブモジュールの内容をドキュメントに含める:**
    `mkdocs.yml` ファイルを編集し、サブモジュールの内容をドキュメントに含めます。`nav` セクションに、サブモジュールのドキュメントへのリンクを追加します。

    ```yaml
    nav:
      - ホーム: index.md
      - サブモジュール:
        - サブモジュール1: 'example-repo/docs/index.md'
    ```

    サブモジュールのドキュメントのパスは、サブモジュール内のドキュメントの場所に合わせて変更してください。

4.  **ドキュメントを更新する:**
    ドキュメントをビルドし、変更を確認します。ローカルで確認する場合は `mkdocs serve` を使用し、変更を反映させながら確認できます。サブモジュールの内容に変更があった場合は、サブモジュールを更新する手順も必要です。

    ```bash
    mkdocs build
    mkdocs serve
    ```

    ```bash
    git submodule update --remote
    ```

この手順に従うことで、他の GitHub リポジトリをサブモジュールとしてドキュメントに含めることができます。

### テンプレートを使ってドキュメントを作成し、公開する手順

**1. テンプレートをクローンする**

まず、このリポジトリをクローンします。

```bash
git clone https://github.com/t012093/document-ui.git <your-project-docs>
cd <your-project-docs>
```

`<your-project-docs>` は、ドキュメントを管理する新しいリポジトリ名に変更してください (例: `プロジェクト名-docs`)。

**2. 依存関係をインストールする**

`requirements.txt` に記載されている必要なパッケージをインストールします。

```bash
pip install -r requirements.txt
```

**3. `mkdocs.yml` を編集する**

`mkdocs.yml` を開き、あなたのプロジェクトに合わせて設定を変更します。

```yaml
site_name: 'Your Project Name' # プロジェクト名
site_description: 'Your Project Description' # プロジェクトの説明
site_author: 'Your Name' # 作者名
repo_url: 'プロジェクトのリポジトリ URL' # プロジェクトのリポジトリ URL
# repo_name: 'your-username/your-project'  #  GitHub リポジトリ名が必要な場合のみコメントアウトを解除

nav:
  - ホーム: index.md
  - プロジェクトの概要: about.md
  - 環境構築: setup.md
  - 使い方: usage.md
  - 開発: development.md
  - 貢献: contributing.md
```

`site_name`、`site_description`、`site_author`、`repo_url` などを適切に設定します。
`nav` セクションを編集して、ドキュメントのナビゲーションメニューをカスタマイズします。

**4. 環境変数を設定する**

`.env.template` をコピーして `.env` ファイルを作成します。

```bash
cp .env.template .env
```

`.env` ファイルを編集し、環境変数を設定します。

```env
SITE_URL=http://localhost:8000 # ローカル開発時
# SITE_URL=https://<your-username>.github.io/<your-project-docs>/ # GitHub Pages 公開時
GITHUB_REPOSITORY=<your-username>/<your-project-docs> # GitHub リポジトリ
PROJECT_NAME=Your Project Name # プロジェクト名
PROJECT_DESCRIPTION=Your Project Description # プロジェクトの説明
```

`SITE_URL` は、ローカル開発時は `#` を先頭につけてコメントアウトし、`http://localhost:8000` に設定します。GitHub Pages でドキュメントを公開する際は、`#` を削除してコメントアウトを外して公開 URL に設定します。
`GITHUB_REPOSITORY` は、ドキュメントを管理する GitHub リポジトリ名 (例: `weuse1324/Lifegenius-docs`) に設定します。
`PROJECT_NAME` と `PROJECT_DESCRIPTION` は、ドキュメント内で使用されるプロジェクト名と説明に設定します。

**5. ドキュメントを記述する**

`docs` ディレクトリ内の Markdown ファイルを編集して、プロジェクトのドキュメントを記述します。テンプレートには、基本的なセクションと記述例が用意されていますので、それを参考にしながらドキュメントを書いてください。

**6. ローカルで確認する**

以下のコマンドでローカルサーバーを起動し、ドキュメントの表示を確認します。

```bash
mkdocs serve
```

ブラウザで `http://localhost:8000` にアクセスし、ドキュメントが正しく表示されることを確認します。

**ローカル開発中の変更の反映:**

`mkdocs serve` コマンドは、ドキュメントの変更を監視し、自動的にブラウザを更新します。
ドキュメントを編集した後、ファイルを保存すると、ブラウザが自動的に更新され、変更が反映されます。
これにより、ドキュメントを編集しながらリアルタイムで表示を確認できます。

**7. ドキュメントをビルドする**

以下のコマンドでドキュメントをビルドします。

```bash
mkdocs build
```

`site` ディレクトリに静的ファイルが生成されます。

**8. GitHub Pages で公開する**

作成したドキュメント用のリポジトリで GitHub Pages を有効にします。

リポジトリのページで、`Settings` > `Pages` を開きます。
`Source` で `Deploy from a branch` を選択します。
`Branch` で `main` (またはドキュメントを配置したブランチ) と `/(root)` を選択します。
`Save` をクリックします。

注記:

`.github/workflows` 配下に `pages-deploy.yml` を作成することで、GitHub Actions でデプロイすることも可能です。どちらの方法でも問題ありません。

**9. プロジェクトからドキュメントへリンクする**

プロジェクトの `README.md` やウェブサイトなど、適切な場所に、GitHub Pages で公開されたドキュメントへのリンクを追加します。

例:

```markdown
## ドキュメント

[プロジェクト名] の詳細なドキュメントは、[こちら](https://<your-username>.github.io/<your-project-docs>/) をご覧ください。
```

## ディレクトリ構成

```
your-project-docs/
├── docs/             # ドキュメントのソースファイル (Markdown)
│   ├── index.md      # ホームページ
│   ├── about.md      # プロジェクトの概要
│   ├── setup.md      # 環境構築手順
│   ├── usage.md      # 使い方
│   ├── development.md# 開発者向け情報
│   └── contributing.md # 貢献方法
├── mkdocs.yml        # MkDocs の設定ファイル
├── .env.template     # 環境変数のテンプレートファイル
├── .github/          # GitHub Actionsの設定ファイル(pages-deploy.yml)
├── requirements.txt  # 必要な Python パッケージ
└── README.md         # このファイル
```

## ライセンス

このテンプレートは MIT ライセンス のもとで公開されています。
