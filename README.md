# GARAX

## Menu

[Use the template at the bottom](#editing-this-readme)

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/truongvunguyen3434/garrax_website.git
git branch -M main
git push -uf origin main
```

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

## Name

Choose a self-explaining name for your project.

## Description

Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges

On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals

Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation

Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage

Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support

Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap

If you have ideas for releases in the future, it is a good idea to list them in the README.

### Statictist's feat

- Intergarion server-sent-event for statictist's module

Xây tool upload video lên TikTok chạy local.

Mã hóa AES cho file m3u8 để hạn chế sao chép nội dung.

Tích hợp các công cụ marketing
Email marketing: Tích hợp với các công cụ email marketing để gửi thông tin khuyến mãi, sản phẩm mới đến khách hàng.
Retargeting ads: Sử dụng công cụ retargeting để quảng cáo lại cho những khách hàng đã từng truy cập website.
Khuyến mãi và giảm giá: Tạo các chương trình khuyến mãi, giảm giá, và mã giảm giá tự động.

Hệ thống đánh giá và phản hồi
Đánh giá sản phẩm: Cho phép khách hàng đánh giá và để lại nhận xét về sản phẩm.
Phản hồi khách hàng: Tích hợp hệ thống phản hồi để thu thập ý kiến từ khách hàng và cải thiện dịch vụ.

Tích hợp AI trong quản lý kho hàng
Dự báo nhu cầu: Sử dụng AI để dự đoán nhu cầu sản phẩm và quản lý kho hàng hiệu quả.
Tự động đặt hàng: Tự động đặt hàng từ nhà cung cấp khi sản phẩm sắp hết hàng.

Hỗ trợ khách hàng
FAQ: Trang hỏi đáp chi tiết để giải đáp các thắc mắc thường gặp.
Hỗ trợ trực tuyến: Tích hợp hệ thống hỗ trợ trực tuyến qua chat, email, hoặc điện thoại.

## Contributing

State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment

Show your appreciation to those who have contributed to the project.

## License

For open source projects, say how it is licensed.

## Project status

If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.

## Git branching model

![model-](image.png)

### The central repo holds two main branches with an infinite lifetime

- main
- develop

Note 1: origin/main to be the main branch where the source code of HEAD always reflects a production-ready state.

Note 2: origin/develop to be the main branch where the source code of HEAD always reflects a state with the latest delivered development changes for the next release.

Note 3: all of the changes should be merged back into main somehow and then tagged with a release number.

### Supporting branches

The different types of branches we may use are:

- Feature branches
- Release branches
- Hotfix branches

### Feature branches

1. May branch off from:

- develop

2. Must merge back into:

- develop

3. Branch naming convention:

- anything except master, develop, release-exp, or hotfix-exp

4. Feature branches typically exist in developer repos only, not in origin.

- example: "Creating a feature branch"

```cmd
$ git checkout -b myfeature develop
Switched to a new branch "myfeature"
```

- example: "Incorporating a finished feature on develop"

```cmd
$ git checkout develop
Switched to branch 'develop'
$ git merge --no-ff myfeature
Updating ea1b82a..05e9557
(Summary of changes)
$ git branch -d myfeature
Deleted branch myfeature (was 05e9557).
$ git push origin develop
```

### Release branches

1. May branch off from:

- develop

2. Must merge back into:

- develop and main

3. Branch naming convention:

- release-exp

- example: "Creating a release branch"

```
$ git checkout -b release-1.2 develop
Switched to a new branch "release-1.2"
$ ./bump-version.sh 1.2
Files modified successfully, version bumped to 1.2.
$ git commit -a -m "Bumped version number to 1.2"
[release-1.2 74d9424] Bumped version number to 1.2
1 files changed, 1 insertions(+), 1 deletions(-)
```

- example: "Finishing a release branch"

```
$ git checkout main
Switched to branch 'main'
$ git merge --no-ff release-1.2
Merge made by recursive.
(Summary of changes)
$ git tag -a 1.2
```

- NOTE: "To keep the changes made in the release branch, we need to merge those back into develop"

```
$ git checkout develop
Switched to branch 'develop'
$ git merge --no-ff release-1.2
Merge made by recursive.
(Summary of changes)
```

- NOTE: "If we don’t need it anymore"

```
$ git branch -d release-1.2
Deleted branch release-1.2 (was ff452fe).
```

### Hotfix branches

1. May branch off from:

- main

2. Must merge back into:

- develop and main

3. Branch naming convention:

- hotfix-exp

- NOTE: When a critical bug in a production version must be resolved immediately, a hotfix branch may be branched off from the corresponding tag on the main branch that marks the production version.

- example: "Creating the hotfix branch"

```
$ git checkout -b hotfix-1.2.1 master
Switched to a new branch "hotfix-1.2.1"
$ ./bump-version.sh 1.2.1
Files modified successfully, version bumped to 1.2.1.
$ git commit -a -m "Bumped version number to 1.2.1"
[hotfix-1.2.1 41e61bb] Bumped version number to 1.2.1
1 files changed, 1 insertions(+), 1 deletions(-)
```

- example: "after fix the bug and commit the fix in one or more separate commits"

```
$ git commit -m "Fixed severe production problem"
[hotfix-1.2.1 abbe5d6] Fixed severe production problem
5 files changed, 32 insertions(+), 17 deletions(-)
```

- example: "Finishing a hotfix branch"

```
$ git checkout master
Switched to branch 'master'
$ git merge --no-ff hotfix-1.2.1
Merge made by recursive.
(Summary of changes)
$ git tag -a 1.2.1
$ git checkout develop
Switched to branch 'develop'
$ git merge --no-ff hotfix-1.2.1
Merge made by recursive.
(Summary of changes)
```

NOTE: The one exception to the rule here is that, when a release branch currently exists, the hotfix changes need to be merged into that release branch, instead of develop. Back-merging the bugfix into the release branch will eventually result in the bugfix being merged into develop too, when the release branch is finished. (If work in develop immediately requires this bugfix and cannot wait for the release branch to be finished, you may safely merge the bugfix into develop now already as well.)

- example: "remove the temporary branch if you want"

```
$ git branch -d hotfix-1.2.1
Deleted branch hotfix-1.2.1 (was abbe5d6).
```
