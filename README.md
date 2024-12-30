
# document-ui をサブモジュールとして利用してドキュメントを作成する手順

このリポジトリをサブモジュールとして他のプロジェクトに追加することで、簡単に MkDocs を使ったドキュメント環境を構築できます。

## 1. document-ui をサブモジュールとして追加

プロジェクトのリポジトリのルートディレクトリで、以下のコマンドを実行して document-ui をサブモジュールとして追加します。

```bash
git submodule add -b test https://github.com/t012093/document-ui.git <サブモジュールを配置するディレクトリ>
```

- `-b test`: document-ui リポジトリの test ブランチを指定します。
- `<サブモジュールを配置するディレクトリ>`: サブモジュールを配置したいディレクトリを指定します。通常は `docs` や `document-ui` などにします。指定しない場合は、`document-ui` というディレクトリに配置されます。

例: `docs` ディレクトリに配置する場合

```bash
git submodule add -b test https://github.com/t012093/document-ui.git docs
```

## 2. サブモジュールの初期化と取得

以下のコマンドで、サブモジュールを初期化し、内容を取得します。

```bash
git submodule update --init --recursive
```

## 3. 必要なパッケージのインストール

document-ui でドキュメントをビルドするために必要なパッケージをインストールします。
サブモジュールディレクトリに移動し、`pip install -r requirements.txt` または、`setup.py` がある場合は `pip install -e .` を実行します。

```bash
cd <サブモジュールを配置するディレクトリ> # 例：cd docs
pip install -r requirements.txt
```

または

```bash
pip install -e .
```

**重要**: サブモジュール内でパッケージをインストールするのではなく、親リポジトリで必要なパッケージをインストールすることを推奨します。 `document-ui` の `requirements.txt` または `setup.py` に記載されているパッケージを確認し、親リポジトリでインストールしてください。

例: 親リポジトリで `pip` を使う場合

```bash
cd <親リポジトリのルートディレクトリ>
pip install mkdocs mkdocs-material mkdocstrings[python] # 必要なパッケージをインストール
```

例: 親リポジトリで `poetry` を使う場合

```bash
cd <親リポジトリのルートディレクトリ>
poetry add mkdocs mkdocs-material mkdocstrings[python] # 必要なパッケージをインストール
```

## 4. ドキュメントの作成

`<サブモジュールを配置するディレクトリ>/docs` ディレクトリ内に、MkDocs のドキュメントファイル（Markdown ファイルなど）を作成します。

例: `docs/docs/index.md` を作成

```markdown
# はじめに

これはドキュメントのサンプルです。
```

## 5. mkdocs.yml の設定

`<サブモジュールを配置するディレクトリ>/mkdocs.yml` を編集し、プロジェクトに合わせて設定を調整します。

- `site_name`: サイト名を変更します。
- `nav`: ナビゲーションメニューを編集します。
- `docs_dir`: ドキュメントファイルが `<サブモジュールを配置するディレクトリ>/docs` 以外に配置されている場合は、`docs_dir: 'docs'` のようにパスを書き換えます。

例:

```yaml
site_name: My Project
docs_dir: 'docs'
site_dir: 'site'
nav:
  - Home: index.md
```

## 6. ドキュメントのビルド

以下のコマンドでドキュメントをビルドします。

```bash
cd <サブモジュールを配置するディレクトリ> # 例：cd docs
mkdocs build
```

または、親リポジトリで `poetry` を使っている場合は

```bash
poetry run mkdocs build
```

`<サブモジュールを配置するディレクトリ>/site` ディレクトリに静的ファイルが生成されます。

## 7. ドキュメントの公開

GitHub Pages などを使って、`site` ディレクトリを公開します。
公開方法はリポジトリによって異なります。

## 8. (オプション) document-ui サブモジュールの更新

document-ui リポジトリの test ブランチが更新された場合、以下のコマンドでサブモジュールを更新できます。

```bash
cd <プロジェクトのルートディレクトリ>
git submodule update --remote <サブモジュールを配置するディレクトリ>
```

例:

```bash
cd <プロジェクトのルートディレクトリ>
git submodule update --remote docs
```

その後、必要に応じて `mkdocs build` を再実行してください。

## サブモジュール利用時の注意点

- サブモジュールの変更は、必ずサブモジュール内でコミットしてください。
- 親リポジトリでは、サブモジュールの参照先（コミットハッシュ）を `git add` してコミットしてください。
- サブモジュールの強制プッシュ(`git push -f`)は、問題の原因になるため避けてください。
- サブモジュールを含むリポジトリをクローンする際は、`git clone --recursive` を使用するか、クローン後に `git submodule update --init --recursive` を実行してください。
- サブモジュールの `requirements.txt` や `setup.py` に記載されているパッケージは、親リポジトリでインストールすることを推奨します。 これにより、サブモジュール内の環境に変更を加えることなく、ドキュメントのビルドに必要なパッケージを管理できます。
document-ui をサブモジュールとして利用してドキュメントを作成する手順
このリポジトリをサブモジュールとして他のプロジェクトに追加することで、簡単に MkDocs を使ったドキュメント環境を構築できます。

1. document-ui をサブモジュールとして追加

プロジェクトのリポジトリのルートディレクトリで、以下のコマンドを実行して document-ui をサブモジュールとして追加します。

Bash

git submodule add -b test https://github.com/t012093/document-ui.git <サブモジュールを配置するディレクトリ>
-b test: document-ui リポジトリの test ブランチを指定します。
<サブモジュールを配置するディレクトリ>: サブモジュールを配置したいディレクトリを指定します。通常は docs や document-ui などにします。指定しない場合は、document-uiというディレクトリに配置されます
例: docs ディレクトリに配置する場合

Bash

git submodule add -b test https://github.com/t012093/document-ui.git docs
2. サブモジュールの初期化と取得

以下のコマンドで、サブモジュールを初期化し、内容を取得します。

Bash

git submodule update --init --recursive
3. 必要なパッケージのインストール

document-ui でドキュメントをビルドするために必要なパッケージをインストールします。
サブモジュールディレクトリに移動し、pip install -r requirements.txt または、setup.py がある場合は pip install -e . を実行します。

Bash

cd <サブモジュールを配置するディレクトリ> # 例：cd docs
pip install -r requirements.txt
# または
pip install -e .
重要: サブモジュール内でパッケージをインストールするのではなく、親リポジトリで必要なパッケージをインストールすることを推奨します。 document-ui の requirements.txt または setup.py に記載されているパッケージを確認し、親リポジトリでインストールしてください。

例: 親リポジトリで pip を使う場合

Bash

cd <親リポジトリのルートディレクトリ>
pip install mkdocs mkdocs-material mkdocstrings[python] # 必要なパッケージをインストール
例: 親リポジトリで poetry を使う場合

Bash

cd <親リポジトリのルートディレクトリ>
poetry add mkdocs mkdocs-material mkdocstrings[python] # 必要なパッケージをインストール
4. ドキュメントの作成

<サブモジュールを配置するディレクトリ>/docs ディレクトリ内に、MkDocs のドキュメントファイル（Markdown ファイルなど）を作成します。

例: docs/docs/index.md を作成

Markdown

# はじめに

これはドキュメントのサンプルです。
5. mkdocs.yml の設定

<サブモジュールを配置するディレクトリ>/mkdocs.yml を編集し、プロジェクトに合わせて設定を調整します。

site_name: サイト名を変更します。
nav: ナビゲーションメニューを編集します。
docs_dir: ドキュメントファイルが <サブモジュールを配置するディレクトリ>/docs 以外に配置されている場合は、docs_dir: 'docs' のようにパスを書き換えます。
例:

YAML

site_name: My Project
docs_dir: 'docs'
site_dir: 'site'
nav:
  - Home: index.md
6. ドキュメントのビルド

以下のコマンドでドキュメントをビルドします。

Bash

cd <サブモジュールを配置するディレクトリ> # 例：cd docs
mkdocs build
# または、親リポジトリで poetry を使っている場合は
# poetry run mkdocs build
<サブモジュールを配置するディレクトリ>/site ディレクトリに静的ファイルが生成されます。

7. ドキュメントの公開

GitHub Pages などを使って、site ディレクトリを公開します。
公開方法はリポジトリによって異なります。

8. (オプション) document-ui サブモジュールの更新

document-ui リポジトリの test ブランチが更新された場合、以下のコマンドでサブモジュールを更新できます。

Bash

cd <プロジェクトのルートディレクトリ>
git submodule update --remote <サブモジュールを配置するディレクトリ>
例:

Bash

cd <プロジェクトのルートディレクトリ>
git submodule update --remote docs
その後、必要に応じて mkdocs build を再実行してください。

サブモジュール利用時の注意点

サブモジュールの変更は、必ずサブモジュール内でコミットしてください。
親リポジトリでは、サブモジュールの参照先（コミットハッシュ）を git add してコミットしてください。
サブモジュールの強制プッシュ(git push -f)は、問題の原因になるため避けてください。
サブモジュールを含むリポジトリをクローンする際は、git clone --recursive を使用するか、クローン後に git submodule update --init --recursive を実行してください。
サブモジュールの requirements.txt や setup.py に記載されているパッケージは、親リポジトリでインストールすることを推奨します。 これにより、サブモジュール内の環境に変更を加えることなく、ドキュメントのビルドに必要なパッケージを管理できます。
