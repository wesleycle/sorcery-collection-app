@echo off
setlocal enabledelayedexpansion
title Sorcery Collection App - servidor local
cd /d "%~dp0"

rem ---------------------------------------------------------------------
rem 1. Confere se o Node esta instalado (>= 18, que traz fetch() nativo -
rem    e usado pelas Functions reaproveitadas em local-server.js).
rem ---------------------------------------------------------------------
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo   Node.js nao foi encontrado nesta maquina.
  echo   Baixe e instale em https://nodejs.org/ ^(versao 18 ou mais nova^)
  echo   e rode este arquivo de novo.
  echo.
  pause
  exit /b 1
)

for /f "tokens=1 delims=." %%v in ('node -e "console.log(process.versions.node)"') do set NODE_MAJOR=%%v
if !NODE_MAJOR! lss 18 (
  echo.
  echo   Encontrei Node.js !NODE_MAJOR!.x instalado, mas este app precisa da
  echo   versao 18 ou mais nova ^(usa fetch^(^) nativo^). Atualize em
  echo   https://nodejs.org/ e rode este arquivo de novo.
  echo.
  pause
  exit /b 1
)

rem ---------------------------------------------------------------------
rem 2. Primeira vez rodando nesta maquina: cria o .env.local a partir do
rem    modelo e pede pra preencher o token antes de continuar.
rem ---------------------------------------------------------------------
if not exist ".env.local" (
  echo.
  echo   Primeira vez rodando aqui - preparando o arquivo .env.local...
  copy ".env.local.example" ".env.local" >nul
  echo.
  echo   Vou abrir o .env.local no Bloco de Notas. Preencha GH_DATA_TOKEN=
  echo   com o token do GitHub ^(mesmo usado no Netlify - veja o README,
  echo   secao "Sincronizacao entre dispositivos" se precisar gerar um^),
  echo   salve o arquivo, feche o Bloco de Notas e depois feche esta janela.
  echo   Depois e so rodar iniciar.bat de novo.
  echo.
  notepad ".env.local"
  pause
  exit /b 0
)

rem ---------------------------------------------------------------------
rem 3. Sobe o servidor e abre o navegador sozinho depois de ~2s (tempo pro
rem    servidor terminar de subir e a porta ficar disponivel).
rem ---------------------------------------------------------------------
set PORT=5500
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:%PORT%"

echo.
echo   Subindo o servidor local em http://localhost:%PORT% ...
echo   ^(deixe esta janela aberta enquanto estiver usando o app - feche-a
echo   ou aperte Ctrl+C aqui pra desligar o servidor^)
echo.

node local-server.js
pause
