git add .
set /p program.name=输入项目注释：
echo.
set /p hubURL=输入GitHub仓库URL：
echo.
git commit -m "%program.name%"
git remote add origin "%hubURL%"
git branch -M main
git push -f origin main
